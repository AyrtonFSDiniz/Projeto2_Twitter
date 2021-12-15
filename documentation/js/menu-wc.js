'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projeto2-twitter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' : 'data-target="#xs-controllers-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' :
                                            'id="xs-controllers-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' : 'data-target="#xs-injectables-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' :
                                        'id="xs-injectables-links-module-AppModule-cdeb5447cb665e7ec21ec6041a8eb7c0bf740ff1e7a009bd8b2e85e2191d47cc8ffa1674f0784fb4a3708f7b6a0f38c9055716fb00c78ba8b41fc3bae1012e5c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-4df0b60dd61e5addae2e7955d376d2a63cb2c91f3b61eb7104be6ab7de0eb53d5623b3cf360f5e7e7833dfa3d4e87a7610fc90c281151d1165071c295f6a826f"' : 'data-target="#xs-injectables-links-module-AuthModule-4df0b60dd61e5addae2e7955d376d2a63cb2c91f3b61eb7104be6ab7de0eb53d5623b3cf360f5e7e7833dfa3d4e87a7610fc90c281151d1165071c295f6a826f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4df0b60dd61e5addae2e7955d376d2a63cb2c91f3b61eb7104be6ab7de0eb53d5623b3cf360f5e7e7833dfa3d4e87a7610fc90c281151d1165071c295f6a826f"' :
                                        'id="xs-injectables-links-module-AuthModule-4df0b60dd61e5addae2e7955d376d2a63cb2c91f3b61eb7104be6ab7de0eb53d5623b3cf360f5e7e7833dfa3d4e87a7610fc90c281151d1165071c295f6a826f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguidoresModule.html" data-type="entity-link" >SeguidoresModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguidoresModule-b9d5bc1750f87b05b0b8d6f172108ecef685b494d6c8c4169a62ed6cbb3df291f1befab132bc87af1e1040ee8b88489a2a8da080fbe559801995f207a198f11b"' : 'data-target="#xs-injectables-links-module-SeguidoresModule-b9d5bc1750f87b05b0b8d6f172108ecef685b494d6c8c4169a62ed6cbb3df291f1befab132bc87af1e1040ee8b88489a2a8da080fbe559801995f207a198f11b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguidoresModule-b9d5bc1750f87b05b0b8d6f172108ecef685b494d6c8c4169a62ed6cbb3df291f1befab132bc87af1e1040ee8b88489a2a8da080fbe559801995f207a198f11b"' :
                                        'id="xs-injectables-links-module-SeguidoresModule-b9d5bc1750f87b05b0b8d6f172108ecef685b494d6c8c4169a62ed6cbb3df291f1befab132bc87af1e1040ee8b88489a2a8da080fbe559801995f207a198f11b"' }>
                                        <li class="link">
                                            <a href="injectables/SeguidoresService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguidoresService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguindoModule.html" data-type="entity-link" >SeguindoModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguindoModule-77836c2ad349ebed3be473bc429f544303cc78cd1724deed9abc9112f6bd849fd7994ee6bc9a899726b01ebf785aac405f9a65f0e0957beccad71f25e09c8138"' : 'data-target="#xs-injectables-links-module-SeguindoModule-77836c2ad349ebed3be473bc429f544303cc78cd1724deed9abc9112f6bd849fd7994ee6bc9a899726b01ebf785aac405f9a65f0e0957beccad71f25e09c8138"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguindoModule-77836c2ad349ebed3be473bc429f544303cc78cd1724deed9abc9112f6bd849fd7994ee6bc9a899726b01ebf785aac405f9a65f0e0957beccad71f25e09c8138"' :
                                        'id="xs-injectables-links-module-SeguindoModule-77836c2ad349ebed3be473bc429f544303cc78cd1724deed9abc9112f6bd849fd7994ee6bc9a899726b01ebf785aac405f9a65f0e0957beccad71f25e09c8138"' }>
                                        <li class="link">
                                            <a href="injectables/SeguindoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguindoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TweetModule.html" data-type="entity-link" >TweetModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TweetModule-59b94be0fa78cec31d94655d89f3ad19f952f25923a40cc1ed7554b2ccece2409a9908e10dcf336cf20cfed6c3a5625604da17ef1b3cc3600d372edf4fe1b347"' : 'data-target="#xs-injectables-links-module-TweetModule-59b94be0fa78cec31d94655d89f3ad19f952f25923a40cc1ed7554b2ccece2409a9908e10dcf336cf20cfed6c3a5625604da17ef1b3cc3600d372edf4fe1b347"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TweetModule-59b94be0fa78cec31d94655d89f3ad19f952f25923a40cc1ed7554b2ccece2409a9908e10dcf336cf20cfed6c3a5625604da17ef1b3cc3600d372edf4fe1b347"' :
                                        'id="xs-injectables-links-module-TweetModule-59b94be0fa78cec31d94655d89f3ad19f952f25923a40cc1ed7554b2ccece2409a9908e10dcf336cf20cfed6c3a5625604da17ef1b3cc3600d372edf4fe1b347"' }>
                                        <li class="link">
                                            <a href="injectables/TweetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguidoresService.html" data-type="entity-link" >SeguidoresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeguindoService.html" data-type="entity-link" >SeguindoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TweetService.html" data-type="entity-link" >TweetService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});