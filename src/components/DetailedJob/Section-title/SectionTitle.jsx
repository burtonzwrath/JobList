
function SectionTitle({ job, days }) {
  const { title, salary } = job;
  let jobSalary = salary.replaceAll("k", " 000");

  return (
    <section className="detailed_Title  flex flex-col">
      <div className="title_wrapper">
        <div className="title">{title}</div>
        <div className="salary_xl">
          <div className="salary_xl_info">€ {jobSalary}</div>
          <div className="salary_xl_text">Brutto, per year</div>
        </div>
      </div>
      <div className="posted">
        <div className="posted_info">
          Posted {days} day{days < 2 ? "" : "s"} ago
        </div>
        <div className="salary">
          <div className="salary_info">Brutto, per year</div>
          <div className="salary_text">€ {jobSalary}</div>
        </div>
      </div>
    </section>
  );
}
export default SectionTitle;
