import { Article } from "@/components/layout/Article";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export default function ContactPage() {
  return (
    <Article page="contact" title="Contact">
      <ContactPageContent />
    </Article>
  );
}
