const SkillProgress = () => {
  return(
    <>
      <div className="progressbar-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content" data-aos="fade-up" data-aos-delay="0">
                <h4 className="title">Functionality meets perfection</h4>
                <p className="title-desc">In today’s day and age, one cannot underestimate the importance of design, the art of
                  creating striking visuals to move and captivate your audience. And as the world becomes more
                  and more digitized with each passing second, the importance of graphic design has been
                  rocketed to the top.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-progress m-t-40">
                <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="0">
                  <h6 className="font--semi-bold m-b-15">UI/UX</h6>
                  <div className="line-progressbar" data-percentage="75" data-progress-color="#ff7004"></div>
                </div>
                <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="200">
                  <h6 className="font--semi-bold m-b-15">Ideas</h6>
                  <div className="line-progressbar" data-percentage="86" data-progress-color="#ff7004"></div>
                </div>
                <div className="skill-progressbar" data-aos="fade-up" data-aos-delay="400">
                  <h6 className="font--semi-bold m-b-15">Design</h6>
                  <div className="line-progressbar" data-percentage="97" data-progress-color="#ff7004"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SkillProgress;