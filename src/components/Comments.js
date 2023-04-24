import React from "react";

const json = [
  {
    avatar:
      "https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj",
    message: "Good ringtone",
    timestamp: "10 Months ago",
    user: "Subroto chakraborty",
    replies: [
      {
        avatar:
          "https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj",
        message: "Good ringtone",
        timestamp: "10 Months ago",
        user: "Subroto chakraborty",
        replies: [
          {
            avatar:
              "https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj",
            message: "Good ringtone",
            timestamp: "10 Months ago",
            user: "Subroto chakraborty",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    avatar:
      "https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj",
    message: "Good ringtone",
    timestamp: "10 Months ago",
    user: "Subroto chakraborty",
    replies: [],
  },
  {
    avatar:
      "https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj",
    message: "Good ringtone",
    timestamp: "10 Months ago",
    user: "Subroto chakraborty",
    replies: [],
  },
];

const Comments = ({ data }) => {
  const { avatar, message, timestamp, user } = data;
  return (
    <div className="flex my-5">
      <img className="h-6 rounded-full mr-3 mt-1" src={avatar} alt="avatar" />
      <div>
        <h3 className="text-slate-600 text-lg font-bold">
          {user} <span className="text-sm"> {timestamp}</span>
        </h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

const CommentLists = ({ data }) => {
  console.log(data, "daya");
  return (
    <div>
      {data.length > 0 && (
        <>
          {data.map((comment, index) => {
            console.log(comment);
            return (
              <div>
                <Comments key={index} data={comment} />
                <div className="ml-6 my-4">
                  <CommentLists key={index} data={comment.replies} />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const TotalCommentCount = () => {
  return (
    <div className="mb-2 w-[97%] md:w-[99%] lg:w[100%]">
      <h3 className="font-bold my-5 text2lg">142 comments</h3>
      <div className="flex mb-6">
        <img
          className="h-6 rounded w-6 mr-2"
          src="https://yt3.ggpht.com/3uA-WoGbVMEsJErcIpwO4XL8Z_FpagmZxat9XXx5E2LZlzEO6Grn4gGvsOlGyhrywdL-MTlhbCk=s88-c-k-c0x00ffffff-no-rj"
          alt="avatar"
        />
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div>
      <TotalCommentCount />
      <CommentLists data={json} />
    </div>
  );
};
export default CommentContainer;
