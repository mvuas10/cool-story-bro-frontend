import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageById } from "../../store/homepageDetails/actions";
import HomePagesList from "../HomePagesList";
import { selectHomePages } from "../../store/homepages/selectors";
import { selectHomePageDetails } from "../../store/homepageDetails/selector";
import { useParams } from "react-router-dom";

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
      <h2>{homepage.title}</h2>
      <h4>{homepage.description}</h4>
    </div>
  );
}
