import React from "react";
import MovieCard from "./MovieCard";
import { shallow } from "enzyme";

describe("MovieCard", () => {
  let wrapper;
  let mockMovie = { poster_path: "/something.jpg", title: "MOVIE" };

  beforeEach(() => {
    wrapper = shallow(<MovieCard key={1} {...mockMovie} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
