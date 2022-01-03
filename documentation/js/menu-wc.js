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
                                            'data-target="#controllers-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' : 'data-target="#xs-controllers-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' :
                                            'id="xs-controllers-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' : 'data-target="#xs-injectables-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' :
                                        'id="xs-injectables-links-module-AppModule-49045145d84ec053366d474434ac8b5f6c472b94b6f21ff2710627c089b2c1717983062353012e24dde48f966ba569811ac8a8143223b678b8fa75dc1f31c382"' }>
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
                                            'data-target="#controllers-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' : 'data-target="#xs-controllers-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' :
                                            'id="xs-controllers-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' : 'data-target="#xs-injectables-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' :
                                        'id="xs-injectables-links-module-AuthModule-18c4666a9f5973264ca49ac577397993e37653ba6a6679ea408adaa4f0cc753f934278f9936edbf943fc8d628048b55a57a1601e5254dc98e1bebd157ea28bcc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' : 'data-target="#xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' :
                                        'id="xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeguidoresModule.html" data-type="entity-link" >SeguidoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' : 'data-target="#xs-controllers-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' :
                                            'id="xs-controllers-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' }>
                                            <li class="link">
                                                <a href="controllers/SeguidoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguidoresController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' : 'data-target="#xs-injectables-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' :
                                        'id="xs-injectables-links-module-SeguidoresModule-5e314f20875d7939e4cfd454425240663217e795010a7e1dd22b55664ea8c922aaa015174305f561d67a1df1fb1de9d73e992abe3bf203b6092c961eeeb68100"' }>
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
                                            'data-target="#controllers-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' : 'data-target="#xs-controllers-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' :
                                            'id="xs-controllers-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' }>
                                            <li class="link">
                                                <a href="controllers/SeguindoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeguindoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' : 'data-target="#xs-injectables-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' :
                                        'id="xs-injectables-links-module-SeguindoModule-53773ce94d2943b5b49e727a2d934ef6b0a40375e250f1a88d80f3435f339781c8a41056818bf097a0ff14c9e31880f3ad09b2e85e8d9ec0f7c396ffdef774b0"' }>
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
                                            'data-target="#controllers-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' : 'data-target="#xs-controllers-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' :
                                            'id="xs-controllers-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' }>
                                            <li class="link">
                                                <a href="controllers/TweetController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' : 'data-target="#xs-injectables-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' :
                                        'id="xs-injectables-links-module-TweetModule-f7f10257ecc265189e33e13f2d64749e4a5bd4f72d7abeca79a42ff0f45469a1da421ef164156d7da6c893c06f85ce95b103d9e29933e24b8dd6e47faf2bf108"' }>
                                        <li class="link">
                                            <a href="injectables/TweetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TweetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsuarioModule.html" data-type="entity-link" >UsuarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' : 'data-target="#xs-controllers-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' :
                                            'id="xs-controllers-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' }>
                                            <li class="link">
                                                <a href="controllers/UsuarioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' : 'data-target="#xs-injectables-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' :
                                        'id="xs-injectables-links-module-UsuarioModule-c5640fbe8d1a44afd6d686ea3d2466f3fc6bccf1a32a7635f37fe129b77ad95bb5fb8ab44e5e04881edf0f9e4825575229e56bd0fd0b33623c40658cdaf2e92b"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsuarioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioService</a>
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
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguidoresController.html" data-type="entity-link" >SeguidoresController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeguindoController.html" data-type="entity-link" >SeguindoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TweetController.html" data-type="entity-link" >TweetController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsuarioController.html" data-type="entity-link" >UsuarioController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSeguidoresDto.html" data-type="entity-link" >CreateSeguidoresDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSeguindoDto.html" data-type="entity-link" >CreateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTweetDto.html" data-type="entity-link" >CreateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsuarioDto.html" data-type="entity-link" >CreateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguidore.html" data-type="entity-link" >Seguidore</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seguindo.html" data-type="entity-link" >Seguindo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tweet.html" data-type="entity-link" >Tweet</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguidoresDto.html" data-type="entity-link" >UpdateSeguidoresDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeguindoDto.html" data-type="entity-link" >UpdateSeguindoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTweetDto.html" data-type="entity-link" >UpdateTweetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsuarioDto.html" data-type="entity-link" >UpdateUsuarioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
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
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
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
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link" >UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
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