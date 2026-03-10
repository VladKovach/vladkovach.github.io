const SkillItem = ({ name }) => {
	return (
		<div className=" rounded-xl bg-gray-100 dark:bg-grayDark border border-gray-300 dark:border-grayLight/20  pt-1.5 pb-2 pr-4.5 pl-4.5 m-1 max-mobile:pl-3.5 max-mobile:pr-3.5 inline-flex items-center justify-baseline">
			{/* <span className=" rounded-full min-h-2 min-w-2 bg-grayDark dark:bg-textLight mr-2" /> */}
			<div className="text-backgroundDark dark:text-textLight">{name}</div>
		</div>
	);
};

export default SkillItem;
