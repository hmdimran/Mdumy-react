import React from "react";
import CourseFooter from "./courses/CourseFooter";
import CourseMain from "./courses/CourseMain";
import Header from "./courses/Header";
import Explore from "./explore/Explore";
import Join from "./join/Join";
import StudentSection from "./students/StudentSection";

export default function Main() {
  return (
    <main>
      <section class="my-5">
        <Header />
        <CourseMain />
        <CourseFooter />
      </section>
      <Explore />
      <Join />

      {/* <!-- Students section Start--> */}
      <StudentSection />
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
