// import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import React, { useState, useEffect } from "react";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NDA5OWFiYWQyODAwMTliZDRkMWIiLCJpYXQiOjE3MTA3NjgyODEsImV4cCI6MTcxMTk3Nzg4MX0.vnphEXjF2MgmVFdeFyU4H6w4dz-Ze0BeIo_W3Qekc64",
          },
        });
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;

////////////////////////////////////////////////////////////////////////////////////////////////////
// const CommentArea = (asin) => {
//   // state = {
//   //   comments: [],
//   //   isLoading: false,
//   //   isError: false,
//   // };
//   const [comments, setComments] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchComments = async () => {
//       setIsLoading(true);
//       try {
//         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NDA5OWFiYWQyODAwMTliZDRkMWIiLCJpYXQiOjE3MTA3NjgyODEsImV4cCI6MTcxMTk3Nzg4MX0.vnphEXjF2MgmVFdeFyU4H6w4dz-Ze0BeIo_W3Qekc64",
//           },
//         });

//         if (response.ok) {
//           let comments = await response.json();
//           setComments(comments);
//           setIsLoading(false);
//           setIsError(false);
//           // this.setState({
//           //   comments: comments,
//           //   isLoading: false,
//           //   isError: false,
//           // });
//         } else {
//           // this.setState({ isLoading: false, isError: true });
//           setIsLoading(false);
//           setIsError(true);
//         }
//       } catch (error) {
//         // this.setState({ isLoading: false, isError: true });
//         setIsLoading(false);
//         setIsError(true);
//       }
//     };
//     if (asin) {
//       fetchComments();
//     }
//   }, [asin]);

//   // componentDidUpdate = async (prevProps) => {
//   //   if (prevProps.asin !== this.props.asin) {
//   //     this.setState({
//   //       isLoading: true,
//   //     });
//   //     try {
//   //       let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
//   //         headers: {
//   //           Authorization:
//   //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NDA5OWFiYWQyODAwMTliZDRkMWIiLCJpYXQiOjE3MTA3NjgyODEsImV4cCI6MTcxMTk3Nzg4MX0.vnphEXjF2MgmVFdeFyU4H6w4dz-Ze0BeIo_W3Qekc64",
//   //         },
//   //       });
//   //       console.log(response);
//   //       if (response.ok) {
//   //         let comments = await response.json();
//   //         this.setState({
//   //           comments: comments,
//   //           isLoading: false,
//   //           isError: false,
//   //         });
//   //       } else {
//   //         this.setState({ isLoading: false, isError: true });
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //       this.setState({ isLoading: false, isError: true });
//   //     }
//   //   }
//   // };

//   // render() {
//   return (
//     <div className="text-center">
//       {isLoading && <Loading />}
//       {isError && <Error />}
//       <AddComment asin={asin} />
//       <CommentList commentsToShow={comments} />
//     </div>
//   );
//   // }
// };

// export default CommentArea;
