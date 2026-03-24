import { useEffect } from "react";

const FacebookComments = ({ url }) => {
      useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [url]);
  return (
 <div
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    ></div>
  )
}

export default FacebookComments
