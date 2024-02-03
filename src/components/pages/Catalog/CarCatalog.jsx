// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdverts } from '../../../redux/advert/advertOperations';
// import Button from '../../button/Button';
// import CatalogList from '../../catalogList/CatalogList';
// import FormFilter from '../../formFilter/FormFilter';
// import { Section } from './CarCatalog.styled';
// import { selectFiltredAdverts } from '../../../redux/filter/filterSelectors';

// const CarCatalog = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const [showBtn, setShowBtn] = useState(true);
//   const carFiltred = useSelector(selectFiltredAdverts);

//   useEffect(() => {
//     dispatch(fetchAdverts(page));
//     if (carFiltred.length < 12 && page < 3) {
//       setShowBtn(false);
//     }
//   }, [carFiltred.length, dispatch, page]);

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <Section>
//       <FormFilter />
//       <CatalogList />
//       {showBtn && (
//         <Button loadMore handlerClick={handleLoadMore}>
//           Load more
//         </Button>
//       )}
//     </Section>
//   );
// };

// export default CarCatalog;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdverts } from '../../../redux/advert/advertOperations';
// import Button from '../../button/Button';
// import CatalogList from '../../catalogList/CatalogList';
// import FormFilter from '../../formFilter/FormFilter';
// import { Section } from './CarCatalog.styled';
// import { selectFiltredAdverts } from '../../../redux/filter/filterSelectors';

// const CarCatalog = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const [showBtn, setShowBtn] = useState(true);
//   const carFiltred = useSelector(selectFiltredAdverts);

//   useEffect(() => {
//     dispatch(fetchAdverts(page));
//   }, [dispatch, page]);

//   useEffect(() => {
//     if (carFiltred.length < 12) {
//       setShowBtn(false);
//     }
//     if (page > 2) {
//       setShowBtn(false);
//     } else {
//       setShowBtn(true);
//     }
//   }, [carFiltred.length, page]);

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <Section>
//       <FormFilter />
//       <CatalogList />
//       {showBtn && (
//         <Button loadMore handlerClick={handleLoadMore}>
//           Load more
//         </Button>
//       )}
//     </Section>
//   );
// };

// export default CarCatalog;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdverts } from '../../../redux/advert/advertOperations';
// import Button from '../../button/Button';
// import CatalogList from '../../catalogList/CatalogList';
// import FormFilter from '../../formFilter/FormFilter';
// import { Section } from './CarCatalog.styled';
// import { selectAdverts } from '../../../redux/advert/advertSelectors';

// const CarCatalog = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const [showBtn, setShowBtn] = useState(true);
//   const carList = useSelector(selectAdverts);
//   useEffect(() => {
//     dispatch(fetchAdverts(page));
//   }, [dispatch, page]);

//   useEffect(() => {
//     if (carList.length < 12 && page > 2) {
//       setShowBtn(false);
//     } else {
//       setShowBtn(true);
//     }
//   }, [carList.length, page]);

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <Section>
//       <FormFilter />
//       <CatalogList />
//       {showBtn && (
//         <Button loadMore handlerClick={handleLoadMore}>
//           Load more
//         </Button>
//       )}
//     </Section>
//   );
// };

// export default CarCatalog;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  startFetchAdverts,
} from '../../../redux/advert/advertOperations';
import Button from '../../button/Button';
import CatalogList from '../../catalogList/CatalogList';
import FormFilter from '../../formFilter/FormFilter';
import { Section } from './CarCatalog.styled';
import { selectAdverts } from '../../../redux/advert/advertSelectors';

const CarCatalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const carList = useSelector(selectAdverts);
  const maxPage = 3;
  const limitCards = 12;

  useEffect(() => {
    dispatch(startFetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchAdverts(page));
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (carList.length < limitCards || page >= maxPage) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  }, [carList.length, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Section>
      <FormFilter setPage={setPage} />
      <CatalogList adverts={carList} />
      {showBtn && (
        <Button loadMore handlerClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </Section>
  );
};

export default CarCatalog;
