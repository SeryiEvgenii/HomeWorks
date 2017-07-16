'use strict';

class ContactTable {
  constructor(){
    this.tableHead = ['Name', 'Surname', 'E-mail'];
    this.contacts = [
      {name:'Jack', surname:'Sparow', email:'sparrow_pirat@gmail.com'},
      {name:'Bob', surname:'Sinclar', email:'sinclar_bob@gmail.com'},
      {name:'Jane', surname:'Snickers', email:'JS@gmail.com'},
      {name:'Bob', surname:'Marley', email:'marleyBob@mail.us'},
      {name:'Tommy', surname:'Li', email:'tommyHL@gmail.com'},
      {name:'Anna', surname:'Switty', email:'sweetyAnn@mail.com'},
      {name:'Richard', surname:'Branson', email:'venus@gmail.com'},
      {name:'Petr', surname:'Osipov', email:'osipovP@mail.ru'},
      {name:'Karina', surname:'Tui', email:'kariTui@gmail.com'},
      {name:'Mick', surname:'Jager', email:'mickJager@mail.us'},
      {name:'Hue', surname:'Heffner', email:'playboy@gmail.com'},
      {name:'Andrey', surname:'Smoke', email:'smokyA@mail.ru'},
      {name:'Jack', surname:'Grey', email:'zhGr@gmail.com'},
      {name:'Nik', surname:'Vuychich', email:'nikV@mail.com'},
      {name:'Julia', surname:'Johnson', email:'julJ@gmail.com'},
    ];
    this.footerNav = [
      {
        href: 'index.html',
        linkClass: 'tab active',
        firstInnerSpanClass: 'glyphicon glyphicon-search',
        firstInnerSpanAttr: 'aria-hidden',
        firstInnerSpanAttrVal: 'true',
        secondInnerSpanClass: 'tab-text',
        linkText: 'Contacts'
      },
      {
        href: 'keypad.html',
        linkClass: 'tab',
        firstInnerSpanClass: 'glyphicon glyphicon-th',
        firstInnerSpanAttr: 'aria-hidden',
        firstInnerSpanAttrVal: 'true',
        secondInnerSpanClass: 'tab-text',
        linkText: 'Keypad'
      },
      {
        href: 'edit-contact.html',
        linkClass: 'tab',
        firstInnerSpanClass: 'glyphicon glyphicon-pencil',
        firstInnerSpanAttr: 'aria-hidden',
        firstInnerSpanAttrVal: 'true',
        secondInnerSpanClass: 'tab-text',
        linkText: 'Edit contact'
      },
      {
        href: 'user.html',
        linkClass: 'tab',
        firstInnerSpanClass: 'glyphicon glyphicon-user',
        firstInnerSpanAttr: 'aria-hidden',
        firstInnerSpanAttrVal: 'true',
        secondInnerSpanClass: 'tab-text',
        linkText: 'User'
      },
      {
        href: 'add-user.html',
        linkClass: 'tab',
        firstInnerSpanClass: 'glyphicon glyphicon-plus',
        firstInnerSpanAttr: 'aria-hidden',
        firstInnerSpanAttrVal: 'true',
        secondInnerSpanClass: 'tab-text',
        linkText: 'Add user'
      },
    ];
  }
  
  new(tag) {
    return document.createElement(tag);
  }
  
  createHeader() {
    const header = this.new('header');
    const div = this.new('div');
    header.classList.add('header');
    div.classList.add('container', 'top-radius');
    header.appendChild(div);
    div.innerHTML = '<h2>Contacts</h2>';
    document.body.appendChild(header);
  }
  
  createMain() {
    const main = this.new('main');
    const div = this.new('div');
    div.classList.add('container');
    div.setAttribute('id', 'table-wrap');
    main.appendChild(div);
    document.body.appendChild(main);
  }
  
  createForm() {
    const form = this.new('form');
    form.classList.add('form-inline', 'search-form');
    const div = this.new('div');
    div.classList.add('form-group');
    const label = this.new('label');
    label.textContent = 'Search';
    label.setAttribute('for', 'search');
    label.classList.add('sr-only');
    const input = this.new('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'search');
    input.setAttribute('placeholder', 'Search');
    input.classList.add('form-control');
    form.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    const wrap = document.querySelector("#table-wrap");
    wrap.appendChild(form);
  }
  
  createTable() {
    const wrap = document.querySelector("#table-wrap");
    const table = this.new('table');
    const thead = this.new('thead');
    const tbody = this.new('tbody');
    const tr = this.new('tr');
    wrap.appendChild(table);
    table.appendChild(thead);
    table.classList.add('table', 'table-hover', 'contacts');
    thead.appendChild(tr);
    
    this.tableHead.forEach(headItem => {
      const th = this.new('th');
      th.textContent = headItem;
      tr.appendChild(th);
    });    
    
    table.appendChild(tbody);
    
    this.contacts.forEach(contact => {
      const tr = this.new('tr');
      tbody.appendChild(tr);
      
      for(let key in contact) {
        const td = this.new('td');
        td.textContent = contact[key];
        tr.appendChild(td);
      };
    });
  }
  
  createFooter() {
    const footer = this.new('footer');
    footer.classList.add('footer');
    const div = this.new('div');
    div.classList.add('container', 'bottom-radius');
    const nav = this.new('nav');
    nav.classList.add('main-nav');
    
    this.footerNav.forEach(elem => {
      const link = `<a href="${elem.href}" class="${elem.linkClass}">
                      <span class="${elem.firstInnerSpanClass}" aria-hidden="${elem.firstInnerSpanAttrVal}"></span>
                      <span class="${elem.secondInnerSpanClass}">${elem.linkText}</span>
                    </a>`;
      nav.insertAdjacentHTML('beforeEnd', link);
    });
    
    footer.appendChild(div);
    div.appendChild(nav);
    document.body.appendChild(footer);
  }
  
  render() {
    this.createHeader();
    this.createMain();
    this.createForm();
    this.createTable();
    this.createFooter();
  }
  
};

const createTable = new ContactTable();
createTable.render();