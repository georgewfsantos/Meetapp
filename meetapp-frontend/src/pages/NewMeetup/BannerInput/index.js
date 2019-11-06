import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ fileObj }) {
  const { defaultValue, registerField } = useField('File');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  useEffect(() => {
    if (fileObj) {
      setFile(fileObj.id);
      setPreview(fileObj.url);
    }
  }, [fileObj]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="File">
        <img
          src={
            preview ||
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          }
          alt=""
        />

        <input
          type="file"
          id="File"
          name="file_id"
          accept="image"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
}

BannerInput.defaultProps = {
  fileObj: {},
};
BannerInput.propTypes = {
  fileObj: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.number,
  }),
};
