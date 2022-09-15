import React from "react";

export default function SingleFaq({ id, question, answer }) {
  return (
    <div class="accordion my-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id={`Question${id}`}>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="false"
            aria-controls={`collapse${id}`}
          >
            {question}
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          class="accordion-collapse collapse"
          aria-labelledby={`Question${id}`}
          data-bs-parent={`#Question${id}`}
        >
          <div class="accordion-body">{answer}</div>
        </div>
      </div>
    </div>
  );
}
