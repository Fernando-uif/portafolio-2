import styleBreak from "@/sass/components/breakInfo.module.scss";

const BreakInfo = () => {
  return (
    <div className={`${styleBreak["break__wrapper"]}`}>
      <div className={`${styleBreak["break"]}`} />
    </div>
  );
};

export default BreakInfo;
