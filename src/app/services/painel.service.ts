import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PainelService {

  api: string = 'http://meupainel.com.br/streetcoin/api/';

  constructor(public http: Http) {
  }

// serviços de login

  postDatas(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'apilogin/logarapp', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  postCadastro(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'apilogin/cadastro', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  postRecsenha(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'apilogin/recpass', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getUserId(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'cliente/getUserId', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


// serviços de noticia


  getNoticias_base() {
    return this.http.get(this.api + 'noticias/getappnoticias_base').map(res => res.json())
  }


  getNoticiaid(id) {
    return this.http.get(this.api + 'noticias/getNoticiaid/' + id).map(res => res.json())
  }


// serviços da equipe

  getCards(): Observable<any[]>{
    return this.http.get(this.api+'equipe/getcards')
    .map(response=>response.json())
    .catch(err=> Observable.throw(err.message));
}


apiLTC(): Observable<any[]>{
  return this.http.get('https://www.mercadobitcoin.net/api/LTC/ticker/')
  .map(response=>response.json())
  .catch(err=> Observable.throw(err.message));
}

getTime(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/getTime', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getPlantel(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/getPlantel', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getTreinamento(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/getTreinamento', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  postTreinamento(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/postTreinamento', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  postPlantelCompra(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/postPlantelCompra', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  PostVenda(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/PostVenda', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  PostEscalar(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/PostEscalar', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  removerEscalar(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/removerEscalar', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  getTimeAtributos(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'equipe/getTimeAtributos', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

// desafios

getTimes(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'desafios/getTimes', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


getPartidas() {
  return this.http.get(this.api + 'desafios/getPartidas').map(res => res.json())
}


PostPartida(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'desafios/PostPartida', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

// transacoes

getSaldo(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/getSaldo', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


getLimiteSaque(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/getLimiteSaque', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

postSaque(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/postSaque', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


getCountSaques(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/getCountSaques', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

getSaqueID(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/getSaqueID', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


deleteSaqueID(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/deleteSaqueID', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}




getCountDepositos(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'transacoes/getCountDepositos', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

// chat



getChat(): Observable<any[]>{
  return this.http.get(this.api+'chat/mensagens')
  .map(response=>response.json())
  .catch(err=> Observable.throw(err.message));
}


postMensagens(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'chat/enviarmensagem', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

// tickets

postTicket(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'tickets/postTicket', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

getTicketID(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'tickets/getTicketID', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

deleteTicketID(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'tickets/deleteTicketID', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


getCountTickets(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'tickets/getCountTickets', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

  //ajuda mutua

  getFila(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'ajuda/getFila', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getTopoFila(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'ajuda/getTopoFila', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }





   //erro
  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }






}