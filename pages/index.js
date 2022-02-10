import Layout from "../components/Layout";

const Index = () => (
  <>
    <Layout>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ryan-ray-profile2.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Rayn Ray</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores rem officia repellendus aliquam vero et consectetur
                  nesciunt in impedit possimus? A voluptatum nulla maiores
                  expedita, voluptates dignissimos placeat sed accusamus.
                </p>
                <a href="/hireme">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-ligth">
            <div className="card-body">
              <h1>Skills</h1>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-ligth">
            <div className="card-body">
              <h1>Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default Index;
