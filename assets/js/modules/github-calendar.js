/**
 * GitHub Calendar Module
 * Fetches and displays GitHub contribution calendar
 */

import { formatDate } from "./utils.js";

const calculateContributionStats = (contributions, total) => {
  let currentStreak = 0;
  let longestStreak = 0;
  let runningStreak = 0;
  let activeDays = 0;

  contributions.forEach((contribution) => {
    if (contribution.count > 0) {
      activeDays += 1;
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  });

  for (let i = contributions.length - 1; i >= 0; i -= 1) {
    if (contributions[i].count > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return {
    totalContributions:
      total?.lastYear ?? contributions.reduce((sum, day) => sum + day.count, 0),
    activeDays,
    currentStreak,
    longestStreak,
  };
};

const renderContributionStats = (calendarContainer, stats) => {
  let statsContainer = calendarContainer.querySelector(".contribution-stats");

  if (!statsContainer) {
    statsContainer = document.createElement("div");
    statsContainer.className = "contribution-stats";
    calendarContainer.appendChild(statsContainer);
  }

  statsContainer.innerHTML = `
    <div class="contribution-stat">
      <span>${stats.totalContributions.toLocaleString()}</span>
      <small>Total Contributions</small>
    </div>
    <div class="contribution-stat">
      <span>${stats.activeDays}</span>
      <small>Commit Days</small>
    </div>
    <div class="contribution-stat">
      <span>${stats.currentStreak}</span>
      <small>Current Commit Streak</small>
    </div>
    <div class="contribution-stat">
      <span>${stats.longestStreak}</span>
      <small>Longest Commit Streak</small>
    </div>
  `;
};

/**
 * Initialize GitHub contributions calendar
 */
export const initGitHubCalendar = async () => {
  const calendarContainer = document.querySelector(
    ".activity-calendar-container"
  );
  const grid = document.querySelector(".calendar-grid");
  const tooltip = document.querySelector(".activity-tooltip");

  if (!calendarContainer || !grid || !tooltip) {
    console.warn("GitHub calendar elements not found");
    return;
  }

  const username = "Rohit94r";
  const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

  // Create months container
  let monthsContainer = calendarContainer.querySelector(".months-container");
  if (!monthsContainer) {
    monthsContainer = document.createElement("div");
    monthsContainer.className = "months-container";
    calendarContainer.insertBefore(monthsContainer, grid);
  }

  let calendarBody = calendarContainer.querySelector(".calendar-body");
  if (!calendarBody) {
    calendarBody = document.createElement("div");
    calendarBody.className = "calendar-body";
    const weekdayLabels = document.createElement("div");
    weekdayLabels.className = "weekday-labels";
    weekdayLabels.innerHTML = `
      <span></span>
      <span>Mon</span>
      <span></span>
      <span>Wed</span>
      <span></span>
      <span>Fri</span>
      <span></span>
    `;
    grid.replaceWith(calendarBody);
    calendarBody.append(weekdayLabels, grid);
  }

  let legend = calendarContainer.querySelector(".contribution-legend");
  if (!legend) {
    legend = document.createElement("div");
    legend.className = "contribution-legend";
    calendarContainer.appendChild(legend);
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const contributions = data.contributions;
    grid.innerHTML = "";

    if (!contributions || contributions.length === 0) {
      console.warn("No contribution data found");
      return;
    }

    const firstDate = new Date(contributions[0].date);
    const startDay = firstDate.getUTCDay();
    const weekCount = Math.ceil((startDay + contributions.length) / 7);

    // Add empty cells for alignment
    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-day is-empty";
      grid.appendChild(emptyCell);
    }

    // Populate grid with contribution data
    contributions.forEach((contribution) => {
      const dayCell = document.createElement("div");
      dayCell.classList.add("calendar-day");
      if (contribution.level > 0) {
        dayCell.classList.add(`level-${contribution.level}`);
      }

      dayCell.dataset.count = contribution.count;
      dayCell.dataset.date = contribution.date;
      grid.appendChild(dayCell);
    });

    while (grid.children.length < weekCount * 7) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-day is-empty";
      grid.appendChild(emptyCell);
    }

    // Populate month labels aligned to the contribution weeks
    const monthLabels = [];
    let lastMonth = -1;
    contributions.forEach((c, index) => {
      const date = new Date(c.date);
      const month = date.getUTCMonth();
      if (month !== lastMonth) {
        monthLabels.push({
          column: Math.floor((startDay + index) / 7) + 2,
          name: date.toLocaleString("default", {
            month: "short",
            timeZone: "UTC",
          }),
        });
        lastMonth = month;
      }
    });
    monthsContainer.style.gridTemplateColumns = `32px repeat(${weekCount}, var(--calendar-cell))`;
    monthsContainer.innerHTML = `<span></span>${monthLabels
      .map((m) => `<span style="grid-column: ${m.column};">${m.name}</span>`)
      .join("")}`;

    legend.innerHTML = `
      <span>Less</span>
      <i class="calendar-day"></i>
      <i class="calendar-day level-1"></i>
      <i class="calendar-day level-2"></i>
      <i class="calendar-day level-3"></i>
      <i class="calendar-day level-4"></i>
      <span>More</span>
    `;

    renderContributionStats(
      calendarContainer,
      calculateContributionStats(contributions, data.total),
    );

    // Tooltip logic
    calendarContainer.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("calendar-day")) {
        const count = event.target.dataset.count;
        const date = formatDate(event.target.dataset.date);
        if (count) {
          tooltip.innerHTML = `<strong>${count} contributions</strong> on ${date}`;
          tooltip.style.display = "block";
        }
      }
    });

    calendarContainer.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });

    calendarContainer.addEventListener("mousemove", (event) => {
      tooltip.style.left = `${event.pageX + 15}px`;
      tooltip.style.top = `${event.pageY - 30}px`;
    });
  } catch (error) {
    console.error("Error fetching GitHub contribution data:", error);
    // Show fallback message
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--light-gray-70);">Unable to load contribution data</div>';
  }
};
