// tslint:disable:no-console
import axios from 'axios';
import * as Bluebird from 'bluebird';
import * as R from 'ramda';
import Folders from './folders';
import Random from './random';

const services: (
  options: {
    core: any,
  },
) => any =
function(options) {
  const responseSuccess: (
    response: any,
  ) => any =
  function(response) {
    if (!response.data.success) {
      // Si es un mensaje con errores es porque es un error de validacion
      // y lo deberia de tratar el formulario correspondiente
      if (!response.data.errors) {
        // Notificar del error producido
        options.core.emit('message.show', {
          type: 'error',
          title: 'js.services.response_error', // I18n.t('js.services.response_error'),
          message: response.data.message,
        });
      }
    }

    // Devolver solamente los datos
    return response.data;
  };

  const responseError: (
    error: any,
  ) => any =
  function(error) {
    console.group('Services.responseError');
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

      // Si es un error de autenticacion redirigir a la pagina de login
      if (error.response.status === 401) {
        console.log('--> Redirigiendo a login');
        options.core.emit('hasher.setHash', 'login');
        console.groupEnd();
        return Promise.resolve({});
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
    console.groupEnd();

    // Notificar del error producido
    options.core.emit('message.show', {
      type: 'error',
      title: 'js.services.request_error', // I18n.t('js.services.request_error'),
      message: error.message,
    });
    return Promise.reject(error);
  };

  // Add a response interceptor
  if (options) { // TODO : Cleanup (this is a hack)
    axios.interceptors.response.use((response: any) => {
      // Do something with response data
      return responseSuccess(response);
    },  (error: any) => {
      // Do something with response error
      return responseError(error);
    });
  }

  return {
    folders: Folders(options),
    random: Random(options),
  };
};

export default services;
