import { appContentStore } from "../stores/appContentStore"
import temple from "../assets/pexels-julia-volk-5769409.jpg"
import "./StoryPage.css"

export const StoryPage = () => {
    const { userName, position } = appContentStore()
    
  return (
    <div className="story-page">
      <div className="story-book">
        <img src={temple} alt="Temple in the djungle." />
        <p>Lorem ipsum</p>
      </div>
      <div className="arrow-container">
        <button>
          <img src="/arrow-up.png" alt="up-arrow" />
        </button>
        <div className="side-arrows">
          <button>
            <img src="/arrow-left.png" alt="left-arrow" />
          </button>
          <button>
            <img src="/arrow-right.png" alt="right-arrow" />
          </button>
        </div>
        <button>
          <img src="/arrow-down.png" alt="down-arrow" />
        </button>
      </div>
    </div>
  );
};
