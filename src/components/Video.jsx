const Video = () => {
    const embedCode =
      '';
  
    return (
      <>
        <section className="d-flex justify-content-center pt-5">
          <div className="video-container">
            <div dangerouslySetInnerHTML={{ __html: embedCode }} />
          </div>
        </section>
      </>
    );
  };
  
  export default Video;
  