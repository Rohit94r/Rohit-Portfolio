"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total?: {
    lastYear?: number;
  };
  contributions: Contribution[];
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const calculateStats = (contributions: Contribution[], total?: number) => {
  let activeDays = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let runningStreak = 0;

  contributions.forEach((day) => {
    if (day.count > 0) {
      activeDays += 1;
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  });

  for (let index = contributions.length - 1; index >= 0; index -= 1) {
    if (contributions[index].count > 0) currentStreak += 1;
    else break;
  }

  return {
    totalContributions:
      total ?? contributions.reduce((sum, day) => sum + day.count, 0),
    activeDays,
    currentStreak,
    longestStreak,
  };
};

export function GitHubContributions() {
  const [data, setData] = useState<ContributionResponse | null>(null);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`,
        );

        if (!response.ok) throw new Error("Unable to load GitHub data");
        setData(await response.json());
      } catch {
        setError(true);
      }
    };

    loadContributions();
  }, []);

  const calendar = useMemo(() => {
    if (!data?.contributions?.length) return null;

    const firstDate = new Date(data.contributions[0].date);
    const startDay = firstDate.getUTCDay();
    const weekCount = Math.ceil((startDay + data.contributions.length) / 7);
    const cells: Array<Contribution | null> = [
      ...Array.from<null>({ length: startDay }).fill(null),
      ...data.contributions,
    ];

    while (cells.length < weekCount * 7) cells.push(null);

    const monthLabels: Array<{ name: string; column: number }> = [];
    let lastMonth = -1;

    data.contributions.forEach((day, index) => {
      const date = new Date(day.date);
      const month = date.getUTCMonth();

      if (month !== lastMonth) {
        monthLabels.push({
          name: date.toLocaleString("default", {
            month: "short",
            timeZone: "UTC",
          }),
          column: Math.floor((startDay + index) / 7) + 2,
        });
        lastMonth = month;
      }
    });

    return {
      cells,
      monthLabels,
      stats: calculateStats(data.contributions, data.total?.lastYear),
      weekCount,
    };
  }, [data]);

  return (
    <section className="contributions">
      <h3 className="h3 technologies-title">GitHub Contributions</h3>
      <p className="github-profile-line">
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          @{profile.githubUsername}
        </a>
      </p>
      <br />
      <div className="activity-calendar-container content-card">
        {error && (
          <div className="calendar-fallback">
            Unable to load contribution data
          </div>
        )}

        {!error && !calendar && (
          <div className="calendar-fallback">Loading contributions...</div>
        )}

        {calendar && (
          <>
            <div
              className="months-container"
              style={{
                gridTemplateColumns: `32px repeat(${calendar.weekCount}, var(--calendar-cell))`,
              }}
            >
              <span />
              {calendar.monthLabels.map((month) => (
                <span
                  key={`${month.name}-${month.column}`}
                  style={{ gridColumn: month.column }}
                >
                  {month.name}
                </span>
              ))}
            </div>

            <div className="calendar-body">
              <div className="weekday-labels">
                <span />
                <span>Mon</span>
                <span />
                <span>Wed</span>
                <span />
                <span>Fri</span>
                <span />
              </div>
              <div className="calendar-grid">
                {calendar.cells.map((day, index) => (
                  <button
                    type="button"
                    className={
                      day
                        ? `calendar-day${day.level > 0 ? ` level-${day.level}` : ""}`
                        : "calendar-day is-empty"
                    }
                    aria-label={
                      day
                        ? `${day.count} contributions on ${formatDate(day.date)}`
                        : "Empty calendar cell"
                    }
                    key={day?.date ?? `empty-${index}`}
                    onMouseEnter={(event) => {
                      if (!day) return;
                      setTooltip({
                        text: `${day.count} contributions on ${formatDate(day.date)}`,
                        x: event.clientX + 15,
                        y: event.clientY - 30,
                      });
                    }}
                    onMouseMove={(event) => {
                      if (!day) return;
                      setTooltip((current) =>
                        current
                          ? {
                              ...current,
                              x: event.clientX + 15,
                              y: event.clientY - 30,
                            }
                          : current,
                      );
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            </div>

            <div className="contribution-legend">
              <span>Less</span>
              <i className="calendar-day" />
              <i className="calendar-day level-1" />
              <i className="calendar-day level-2" />
              <i className="calendar-day level-3" />
              <i className="calendar-day level-4" />
              <span>More</span>
            </div>

            <div className="contribution-stats">
              <div className="contribution-stat">
                <span>{calendar.stats.totalContributions.toLocaleString()}</span>
                <small>Total Contributions</small>
              </div>
              <div className="contribution-stat">
                <span>{calendar.stats.activeDays}</span>
                <small>Commit Days</small>
              </div>
              <div className="contribution-stat">
                <span>{calendar.stats.currentStreak}</span>
                <small>Current Commit Streak</small>
              </div>
              <div className="contribution-stat">
                <span>{calendar.stats.longestStreak}</span>
                <small>Longest Commit Streak</small>
              </div>
            </div>
          </>
        )}
      </div>

      {tooltip && (
        <div
          className="activity-tooltip"
          style={{ display: "block", left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
