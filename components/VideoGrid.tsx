import { Videocard } from "@/components/VideoCard";
const Videos = [
  {
    title: "How to learn coding in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn jumping in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn playing in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn playing in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn playing in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn playing in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
  {
    title: "How to learn playing in 30 days| 30 day plan | code with me",
    image: "/shh.jpg",
    author: "Arvind Shahi",
    views: "150M",
    timestamp: "13 days ago",
  },
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
      {Videos.map((video) => (
        <div>
          <Videocard
            title={video.title}
            image={video.image}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></Videocard>
        </div>
      ))}
    </div>
  );
};
