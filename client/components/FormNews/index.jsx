import React from 'react';
import { connect } from 'react-redux';
import { createNews, deleteNews } from '../../store/actions/news.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default connect((s) => ({
  news: s.news,
}), {
  createNews,
  deleteNews
})(
  ({
    createNews,
    deleteNews
  }) => {

    //state
    const [namedNews, setNamedNews] = React.useState('');
    const [descriptionNews, setDescriptionNews] = React.useState('');
    const [image, setImage] = React.useState(null);

    //Create news function
    function createdNews() {
      const formData = new FormData();
      formData.append('named', namedNews);
      formData.append('description', descriptionNews);
      if (image) {
        formData.append('image', image);
      }
      createNews(formData);
      toast.success('Новость успешно создана', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    //Delete news function
    function deletedNews() {
      deleteNews(namedNews);
      toast.success('Новость успешно удалена', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    return (
      <>
        <div className="mb-3">
          <div className='blockNewsNamedNews'>
            <label
              for="exampleFormControlInput1"
              className="form-label">
              Название новости
            </label>
            <input
              value={namedNews}
              onChange={(e) => setNamedNews(e.target.value)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Название"
            />
          </div>

        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label">
            Описание новости
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={descriptionNews}
            onChange={(e) => setDescriptionNews(e.target.value)}
          >
          </textarea>
          <div className='blockImage'>
            <p>Загрузите картинку</p>

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className='btnGroupNews'>
            <button
              style={{ width: "40%" }}
              type="button"
              className="btn btn-outline-primary"
              onClick={createdNews}
            >
              Создать
            </button>
            <button
              style={{ width: "40%", marginLeft: "10px" }}
              type="button"
              className="btn btn-outline-danger"
              onClick={deletedNews}
            >
              Удалить
            </button>
          </div>
        </div>
      </>
    )
  }
)
