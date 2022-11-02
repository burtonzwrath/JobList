function SectionTitle({ state, days }) {
  const { title, salary } = state;
  let jobSalary = salary.replaceAll("k", " 000");
  return (
    <section className="detailed__Title  flex flex-col">
      <div className="detailed__titleWrapper pt-5 flex justify-between">
        <div className="detailed__title  max-w-[500px] h-30 text-sky-900 font-semibold text-xl">
          {title}
        </div>
        <div className="detailed__price pl-5 shrink-0  hidden xl:block">
          <div className="text-sky-900 font-semibold text-xl">
            € {jobSalary}
          </div>
          <div className="text-sky-900 font-semibold text-sm">
            Brutto, per year
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-7 xl:pt-0">
        <div className="pt-2 text-stone-300">
          Posted {days} day{days < 2 ? "" : "s"} ago
        </div>
        <div className="detailed__price pl-5 shrink-0  xl:hidden ">
          <div className="text-sky-900 font-semibold text-sm flex justify-end">
            Brutto, per year
          </div>
          <div className="text-sky-900 font-semibold text-xl">
            € {jobSalary}
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionTitle;
