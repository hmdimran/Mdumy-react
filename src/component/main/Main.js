import React from "react";
import CourseFooter from "./courses/CourseFooter";
import CourseMain from "./courses/CourseMain";
import Header from "./courses/Header";
import Explore from "./explore/Explore";

export default function Main() {
  return (
    <main>
      {/* <!-- Popular Course Section Start --> */}
      <section class="my-5">
        <Header />
        <CourseMain />
        <CourseFooter />
      </section>
      {/* <!-- Popular Course Section Start --> */}

      {/* <!-- Explore Course Section Start --> */}
      <Explore />
      {/* <!-- Explore Course Section End --> */}
      {/* <!-- Join Section Start --> */}
      <section class="container my-5 text-white">
        <div class="d-flex justify-content-between align-items-center p-5 bg-primary bg-opacity-100 rounded-3 flex-md-column text-md-center flex-lg-row flex-column text-center">
          <div class="join-50">
            <h2>Ready to join?</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="">
            <button class="btn btn-lg bg-white text-primary py-2 px-5 rounded-1">
              Register
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Join section End--> */}

      {/* <!-- Students section Start--> */}
      <section class="container my-5">
        <header class="text-md-start text-lg-start text-center">
          <h1>Meet Our Successfull Students</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </header>
        <main class="my-5">
          <div class="row gx-4 gy-4">
            <div class="col-md-6 col-lg-3">
              <div class="card">
                <img
                  src="images/student/student-1.png"
                  class="card-img-top"
                  alt="Awlad Hossain"
                />
                <div class="card-body">
                  <h5 class="card-title">Awlad Hossain</h5>
                  <p class="card-text">UIUX Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card">
                <img
                  src="images/student/student-2.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Jannatul Islam</h5>
                  <p class="card-text">Motion Design</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card">
                <img
                  src="images/student/student-3.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Imran Hossain</h5>
                  <p class="card-text">Graphic Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card">
                <img
                  src="images/student/student-4.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Nishi Akter</h5>
                  <p class="card-text">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="container text-center my-5">
          <button class="btn btn-primary rounded-1 py-2 px-5 text-white">
            View All
          </button>
        </footer>
      </section>
      {/* <!-- Students section End--> */}

      {/* <!-- FAQ Start --> */}
      <section class="container my-5 text-center">
        <div>
          <header class="w-50 mx-auto">
            <h1>Frequently Asked Questions</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </header>
          <main class="w-100 mx-auto my-5">
            <div class="accordion my-3" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="Question1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Question One
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="Question1"
                  data-bs-parent="#Question1"
                >
                  <div class="accordion-body">
                    This is the second item's accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and
                    hiding via CSS transitions.
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion my-3" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="Question2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Question Two
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="Question2"
                  data-bs-parent="#Question2"
                >
                  <div class="accordion-body">
                    This is the second item's accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and
                    hiding via CSS transitions.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="Question3">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Question Two
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="Question3"
                  data-bs-parent="#Question3"
                >
                  <div class="accordion-body">
                    This is the second item's accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and
                    hiding via CSS transitions.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="Question4">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Question Two
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="Question4"
                  data-bs-parent="#Question4"
                >
                  <div class="accordion-body">
                    This is the second item's accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and
                    hiding via CSS transitions.
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      {/* <!-- FAQ End -->
      <!-- Companies Section Start --> */}
      <section class="container my-5 d-lg-block d-none">
        <header class="text-center my-4">
          <h1>Trusted by over 800+ companies</h1>
        </header>
        <footer class="my-5">
          <div class="d-flex justify-content-between align-items-center">
            <img src="images/company/company-1.png" alt="" />
            <img src="images/company/company-2.png" alt="" />
            <img src="images/company/company-3.png" alt="" />
            <img src="images/company/company-4.png" alt="" />
            <img src="images/company/company-5.png" alt="" />
            <img src="images/company/company-6.png" alt="" />
          </div>
        </footer>
      </section>
      {/* <!-- Companies Section End --> */}
    </main>
  );
}
