const SKillIcon = ({ skill }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-[180px] h-[180px]"
      />
      <p className="font-[Playfair] text-xl py-6">{skill.name}</p>
    </div>
  );
};

export default SKillIcon;
