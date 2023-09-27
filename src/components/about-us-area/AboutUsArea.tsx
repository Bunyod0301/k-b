import Image from "next/image";

const AboutUsArea = () => {
  return(
    <>
      <section className="about-area pb-100px pt-100px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left-image mb-md-30px mb-lm-30px" data-aos="fade-up">
                <Image 
                  src="/assets/images/about-image/1.jpg"
                  alt=""
                  width={570}
                  height={330}
                  className="img-responsive w-100" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title" data-aos="fade-up">
                  <h2>Welcome To Furns</h2>
                </div>
                <p className="mb-30px" data-aos="fade-up" data-aos-delay="200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur
                  voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus
                  dolorum voluptate, animi libero officiis eveniet accusamus recusandae. Temporibus
                  amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro suscipit. Quibusdam
                  culpa asperiores exercitationem architecto quo distinctio sed dolorem!
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                  Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora iusto
                  eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam accusantium minus
                  repellendus laudantium provident quod recusandae exercitationem natus
                  dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutUsArea;