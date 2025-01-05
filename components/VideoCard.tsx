export function Videocard(props: any) {
  return (
    <div className="p-3">
      <img className={"rounded-xl "} src="/ytclone.jpg"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 ">
          <img className={"rounded-full "} src={props.image}></img>
        </div>
        <div className="col-span-11 pl-1">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
