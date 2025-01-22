import { useState } from "react";
import { useOptimistic, useTransition } from "react";
async function updateComment() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
const UseOptimistic = () => {
  const [inputcomment, setInputComment] = useState("");
  const [comment, setComment] = useState(["First Comment"]);
  const [isPending, startTransition] = useTransition();
  const [optimisticComment, setOptimisticComment] = useOptimistic(
    comment,
    (state, newComment) => [...state, newComment]
  );

  console.log("before", optimisticComment);
  const handleAddComment = async () => {
    startTransition(async () => {
      setOptimisticComment(inputcomment);
      await updateComment();
      setInputComment("");
      setComment((prev) => [...prev, inputcomment]);
    });
  };
  console.log("after", optimisticComment);
  return (
    <>
      <h5>Use Optimistic Hook Example</h5>
      <div>
        <div className="form-group card d-flex flex-column align-items-center mt-3 mb-3 w-50 border border-primary p-3 rounded gap-3">
          <label htmlFor="comment">Comment</label>
          <input
            className="form-control"
            value={inputcomment}
            onChange={(event) => setInputComment(event.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={handleAddComment}
            disabled={isPending}
          >
            Add Comment
          </button>
          <div>
            {optimisticComment.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseOptimistic;
