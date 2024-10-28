import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const authiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('appelé');
  const apikey = environment.API_KEY;
  console.log(apikey);

  const reqWithHeader = req.clone({
  
    headers: req.headers.set('X-Api-Key', apikey ),
  
  });
  return next(reqWithHeader);


};
