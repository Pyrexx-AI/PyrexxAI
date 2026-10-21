import { Section, SectionHead } from "@/components/ui/Section";

const ROWS = [
  ["Agent Persona", "Generic template voices", "Custom-trained clinic voice & tone"],
  ["Setup Effort", "You configure everything yourself", "Done-for-you in 14 days"],
  ["EMR Integration", "Fragile generic webhooks", "Direct native calendar read/write bridges"],
  ["Ongoing Maintenance", "No dedicated engineering support", "Weekly logic upgrades & re-training"],
  ["Compliance & Legal", "You figure out HIPAA liability", "Signed BAA + Full HIPAA guarantee"],
];

export default function CustomPositioning() {
  return (
    <Section alt aria-labelledby="positioning-title">
      <SectionHead
        id="positioning-title"
        eyebrow="Why PyrexxAI"
        title={<>Not just another tool. <br />A complete technical partner.</>}
      >
        Most AI tools hand you a dashboard and a manual. PyrexxAI acts as your dedicated AI engineering implementation team. We map your clinical intake workflows, build your agent from scratch, integrate with your specific EMR, and handle every edge case.
      </SectionHead>
      <div className="table-card table-card--stack" data-reveal>
        <table>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">DIY Voice AI Software</th>
              <th scope="col">PyrexxAI Agency</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([feature, diy, us]) => (
              <tr key={feature}>
                <td>{feature}</td>
                <td data-label="DIY Voice AI Software">{diy}</td>
                <td data-label="PyrexxAI Agency">{us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
