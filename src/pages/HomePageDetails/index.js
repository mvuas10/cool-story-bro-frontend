import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageById } from "../../store/homepageDetails/actions";
import HomePagesList from "../HomePagesList";
import { selectHomePages } from "../../store/homepages/selectors";
import { selectHomePageDetails } from "../../store/homepageDetails/selector";
import { useParams } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Stories from "../../components/Stories";

export default function HomePageDetails() {
  const dispatch = useDispatch();
  const homepage = useSelector(selectHomePageDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchHomePageById(id));
  }, [dispatch, id]);

  if (!homepage.title) return <h1>Loading...</h1>;

  return (
    <div>
      <Jumbotron
        style={{
          color: homepage.color,
          backgroundColor: homepage.backgroundColor,
        }}
      >
        <h2>{homepage.title}</h2>
        <h4>{homepage.description}</h4>
        <Stories homepage={homepage} />
      </Jumbotron>
    </div>
  );
}
