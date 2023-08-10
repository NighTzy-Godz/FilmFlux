import React, { useEffect } from "react";
import WidthContainer from "../containers/WidthContainer";
import calculateItems from "../../utils/calculateItems";
import "../../assets/css/pages/all_people.css";
import PagePadding from "../containers/PagePadding";
import { useDispatch, useSelector } from "react-redux";
import { getPopularPeople, setPersonPage } from "../../store/slices/people";
import PeopleCard from "../common/PeopleCard";
import Column from "../containers/Column";
import ReactPaginate from "react-paginate";

const PAGE_SIZE = 20;

function People() {
  const dispatch = useDispatch();
  const peopleReducer = useSelector(
    (state) => state.entities.people.peopleList
  );

  const peopleParams = useSelector(
    (state) => state.entities.people.peopleParams
  );

  const {
    results: people,
    page: currPage,
    total_results: itemCount,
  } = peopleReducer;

  const pageCount = itemCount / PAGE_SIZE;

  useEffect(() => {
    dispatch(getPopularPeople(peopleParams));
  }, [dispatch]);

  const handlePageChange = (dataPage) => {
    const { selected } = dataPage;
    const page = selected + 1;

    dispatch(setPersonPage(page));
    dispatch(getPopularPeople({ ...peopleParams, page }));
  };

  const renderPeopleCard = people?.map((person) => {
    return (
      <React.Fragment key={person.id}>
        <Column col={5}>
          <PeopleCard data={person} />
        </Column>
      </React.Fragment>
    );
  });

  return (
    <PagePadding className="all_people">
      <WidthContainer>
        <div className="title">
          <h1>Popular Movie Casts</h1>
        </div>
        <div className="all_people_container">
          {renderPeopleCard}
          <div className="pagination_container">
            <div className="result_container">
              <p>Showing {calculateItems(currPage, PAGE_SIZE, itemCount)}</p>
            </div>
            <ReactPaginate
              className="paginate"
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="...."
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              activeClassName="active"
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </WidthContainer>
    </PagePadding>
  );
}

export default People;
