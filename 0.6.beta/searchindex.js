Search.setIndex({docnames:["api/apt","api/aptkernel","api/backgroundstart","api/correctphase","api/correctscale","api/correctzerotime","api/deerload","api/dipolarkernel","api/dipolarsignal","api/fftspec","api/fitbackground","api/fitmultigauss","api/fitparamodel","api/fitregmodel","api/longpass","api/mixmodels","api/noiselevel","api/obir","api/overtones","api/paramodel","api/prepvalidation","api/regoperator","api/regparamrange","api/selectmodel","api/selregparam","api/sensitivan","api/suppressghost","api/time2dist","api/time2freq","api/whitenoise","api/winlowpass","download","examples","examples/example_Lcurve","examples/example_basicprocessing","examples/example_basicvalidation","examples/example_fitting5pulseDEER","examples/example_generatesignals","examples/example_multigauss","examples/example_parametricglobalfit","examples/example_pararegcombination","examples/example_ridmeregularization","examples/example_selectmodel","examples/example_timedomainfitting","functions","index","models","models/rd_fivegaussian","models/rd_fourgaussian","models/rd_onegaussian","models/rd_onerice","models/rd_randcoil","models/rd_threegaussian","models/rd_threerice","models/rd_twogaussian","models/rd_tworice","models/rd_wormchain","models/td_exp","models/td_poly1","models/td_poly2","models/td_poly3","models/td_prodstrexp","models/td_strexp","models/td_sumstrexp","theory","theory/dipolarkernel_theory","theory/regoperator_theory","theory/regularization_basics","tutorial"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api/apt.rst","api/aptkernel.rst","api/backgroundstart.rst","api/correctphase.rst","api/correctscale.rst","api/correctzerotime.rst","api/deerload.rst","api/dipolarkernel.rst","api/dipolarsignal.rst","api/fftspec.rst","api/fitbackground.rst","api/fitmultigauss.rst","api/fitparamodel.rst","api/fitregmodel.rst","api/longpass.rst","api/mixmodels.rst","api/noiselevel.rst","api/obir.rst","api/overtones.rst","api/paramodel.rst","api/prepvalidation.rst","api/regoperator.rst","api/regparamrange.rst","api/selectmodel.rst","api/selregparam.rst","api/sensitivan.rst","api/suppressghost.rst","api/time2dist.rst","api/time2freq.rst","api/whitenoise.rst","api/winlowpass.rst","download.rst","examples.rst","examples/example_Lcurve.rst","examples/example_basicprocessing.rst","examples/example_basicvalidation.rst","examples/example_fitting5pulseDEER.rst","examples/example_generatesignals.rst","examples/example_multigauss.rst","examples/example_parametricglobalfit.rst","examples/example_pararegcombination.rst","examples/example_ridmeregularization.rst","examples/example_selectmodel.rst","examples/example_timedomainfitting.rst","functions.rst","index.rst","models.rst","models/rd_fivegaussian.rst","models/rd_fourgaussian.rst","models/rd_onegaussian.rst","models/rd_onerice.rst","models/rd_randcoil.rst","models/rd_threegaussian.rst","models/rd_threerice.rst","models/rd_twogaussian.rst","models/rd_tworice.rst","models/rd_wormchain.rst","models/td_exp.rst","models/td_poly1.rst","models/td_poly2.rst","models/td_poly3.rst","models/td_prodstrexp.rst","models/td_strexp.rst","models/td_sumstrexp.rst","theory.rst","theory/dipolarkernel_theory.rst","theory/regoperator_theory.rst","theory/regularization_basics.rst","tutorial.rst"],objects:{},objnames:{},objtypes:{},terms:{"12r":[],"16r":[],"16r_1":[],"16r_i":[],"1e10":[12,13,17],"1e3":8,"1e4":[],"1e5":17,"1e8":[],"1st":[47,48,52,53,54,55,58,59,60,61,63],"25th":25,"2e7":[12,13,17],"2ln":[47,48,49,52,54],"2nd":[2,47,48,52,53,54,55,59,60,61,63],"2nm":[],"2overton":[],"2r_1":[],"2r_i":[],"3r_1":[],"3r_i":[],"3rd":[47,48,52,53,60],"4dr":[],"4nm":[],"4r_i":[],"4th":[47,48],"4us":[],"50th":25,"5par0":[],"5th":47,"5us":[],"6nm":[],"75th":25,"8nm":[],"boolean":3,"case":[1,2,7,8,9,10,11,12,13,17,19,20,22,23,24,25,30,65],"class":45,"default":[1,2,3,6,7,8,9,10,11,12,13,17,20,22,23,24,25,30,31,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],"f\u00e1brega":[65,66],"final":[12,13],"function":[0,1,2,7,8,10,11,12,13,15,16,17,19,20,21,23,24,25,26,30,31,35,36,39,40,43,45,50,53,55,65],"ib\u00e1\u00f1ez":[65,66],"import":[],"int":[],"long":19,"new":15,"return":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],"short":[14,45],"true":[10,13,17,20,24,25,30,36],"try":[],"void":[],"while":[],Adding:31,DDS:0,For:[2,20,21,25,65,66],IDE:31,One:[],Res:33,The:[1,2,3,4,6,7,8,10,11,12,13,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,38,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66],There:45,These:27,Use:[7,8,34,35],Uses:[11,23],Using:[],With:66,___:[],_max:11,_min:11,a_1:[43,47,48,52,53,54,55,63],a_2:[47,48,52,53],a_3:[47,48],a_4:47,abl:[],about:[],abov:68,abs:9,absolut:[],absorpt:9,accept:[11,12,23,25],access:31,accomplish:[8,29],accord:[11,12,13,14,17,18,23,24,27,28,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,67],accordingli:[],account:[7,65],accur:[],acquir:[],acronym:24,action:65,actual:[],adapt:20,add:31,added:67,addednoiselevel:[],adding:[],addit:[3,10,11,12,19,24,31],addition:[12,25],addpath:31,adjust:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],adopt:[],advanc:[],after:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],again:65,agreement:67,aic:[11,23,24,33,34,35,36,41,42,68],aicc:[11,23,24,35,38],aicidx:33,aikaik:11,aim:67,akaik:[11,23,24],albeit:[12,13,17,24],algebra:66,algorithm:12,all:[1,2,7,8,9,10,11,12,13,17,19,20,22,23,24,25,30,68],allow:12,along:[10,11],alongsid:11,alpha:[13,17,22,24,33,41,67],alreadi:13,also:[21,24,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,68],altern:24,although:[],amount:[],amp0:36,amp1:43,amp:36,ampitud:[],amplitud:[4,7,8,36,43,47,48,52,53,54,55,63],analysi:[25,35,40,45,66],analysisfcn:[],analysisnow:[],analysisth:[],analysisw:[],analyt:[13,18,24],analyz:45,anaysi:[],angl:3,angstrom:7,ani:[1,2,7,8,9,10,11,12,13,14,17,20,22,23,24,25,30,36,66],anonym:[],anoth:[],answer:[],anyth:[],api:[31,32,45],apod:[],appl:66,appli:[3,14],applic:[31,66],approach:[24,67],approachesauthor:[],approachescomparison:[],appropi:[],approxim:[0,1,7,21,26,27],apt:[1,44],aptkernel:[0,44],aptpapt1:[],aptwith:[],arbitrari:[],arg:[2,7,8,9,10,11,12,13,17,22,23,24,30,67],argu:66,argument:[3,19,29,65],aris:[],around:24,arrai:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],artefact:[36,37],artifici:[],assess:[],associ:[45,68],assum:[7,68],assumpt:[],attenu:30,author:[],automat:[3,7,10,12,13,17,20,24],avail:[13,24,67],averag:7,avoid:[],axes:[12,38],axest1:[],axest:[],axi:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,17,21,23,24,25,27,28,29,33,34,35,36,37,38,39,40,41,42,43,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,68],axishandl:[17,25],axisr:[],axist:[],back:[],backgmodel:11,backgorund:40,background:[2,4,7,8,10,11,19,32,34,35,39,43,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,68],backgrounda:[],backgroundb:[],backgroundbfit:[],backgroundk:[],backgroundkb:[],backgroundmymodel:[],backgroundp:[],backgroundstart:[10,44],backgrund:[],backmoodel:11,backward:30,balanc:67,band:[14,30],bandwidth:[1,7],bandwith:7,banham:7,barh:43,base:[1,7,10,24,41],basi:[],basic:[32,64],bayesian:[11,23,24],bckgmodel:11,beckground:43,been:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30,65,66,67],befor:66,begin:[],being:12,below:14,bessel:[50,53,55],beta:[45,67],better:24,between:[14,27,51,67],bfit:[40,41],bic:[11,23,24,33,35],bicidx:33,bilevel:[],bimod:[],biomacromolecul:66,block:13,both:[3,7],bottom:[],bound:[11,12,19,23,25,39,43,49,50,57,58,59,60,61,62,63],boundari:[19,25],box:[33,34,35,36,37,38,39,40,41,42,43],bparam:41,bppnnl:13,bregman:17,brief:[],broaden:[],browser:6,build:24,built:[],button:[],c3cp44462g:26,c_k:[],c_l:24,calcul:[7,18,37,68],call:[8,16,20,21,29,67],caller:[],can:[1,2,3,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,27,28,29,30,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66],candid:[22,24],cannot:[],care:[],categor:46,cell:[11,12,13,15,20,23,24,25],center:[7,8,43],certain:27,chain:56,chang:[45,67],check:[],chem:26,chi:12,chisquar:12,choic:[42,67],choos:11,chosen:[],clc:[33,34,35,36,37,39,40,41,42,43],clear:[33,34,35,36,37,38,39,40,41,42,43],clf:[33,34,35,36,37,38,39,40,41,42,43],clfsubplot:[],click:31,clone:[],close:31,code:31,coeffici:[7,8,12,13,18,24,65],coefficientsauthor:[],coefficientsoverton:[],coefficientssensit:[],coil:51,collect:[45,46],color:66,combin:[15,20,25,40,45],command:[],commerci:[],common:[],commonli:[],compar:[],comparison:[33,36,39,40,41],compat:[3,19],compens:7,compil:[],complex:[3,8],compon:[0,3,66],componentsin:[],componentslet:[],componentsp:[],componentst:[],comput:[0,1,2,7,8,9,10,12,13,14,17,18,19,20,21,24,27,28,33,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,67],computingvfit:[],concept:[],condier:[],condit:[],conform:66,consid:16,consider:[],consist:45,constant:43,constrain:[12,13,17,19],constraint:[13,24],construct:[7,30,33,36,39,40,43],contain:[1,6,7,8,11,19,20,23,24,25,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,66],continu:[],contour:[],contrast:[],contribut:[12,13,24,26,67],control:[17,67],contructor:[],converg:[],convers:[27,28],convert:[19,43],convertor:[],convolut:[],corr:[],correct:[3,4,5,7,11,23,24,36,41],correctionof:[],correctphas:[34,35,44],correctscal:[34,35,44],correctzerotim:[34,35,44],correspond:[1,2,8,11,12,24,37,67],cos:[7,65],cosid:[],cosntruct:[],cost:[12,13,17,24],costmodel:12,could:[],cover:[],creat:[31,36,40],criteria:24,criterion:[11,23,24,28,66],cross:24,crosstalk:1,crucial:[],cruve:33,cumul:24,current:[6,12,31,45],curv:[24,32],curvatur:24,curveaicidx:[],curveauthor:[],curvefigur:[],curvefin:[],curvelogr:[],curvevisu:[],curvewith:[],custom:[36,40,45],cutoff:[],d1fit:[],d2fit:[],d3fit:[],d_1:[61,63],d_2:[61,63],damp:66,data:[0,3,6,10,32,34,35,38,40,41,43,45,65,66,67,68],datalet:[],dataparamfit:[],dataset:45,datasetsfirst:[],datasetsin:[],dcorr:[],deal:[],decai:[40,43,57,61,62,63],decomposit:22,decor:[],decreas:17,deer:[7,8,32,37,43,45,66],deer_broad_50k_4u:[34,35],deeranalyis2:[33,34,35,36,37,38,39,40,41,42,43],deeranalysi:[19,27,31,46],deeranalysis2:[15,16,45,67],deeranaysi:68,deerlab:[],deerlab_x:[],deerload:[34,35,44],defin:[2,10,12,19,25,35,39,43,46,65],definit:[12,16,36,40,41],definitiont:[],degre:[],delta:[7,13,27,65],deltaaic:[],densiti:66,depend:[12,36,40,46,67],depth:[7,8,10,11,36,40,65],depthdcorr:[],depthlambda:[],deriv:[21,27,66],descent:24,describ:65,descript:[],design:25,desir:[],detail:[2,11,12,13,23],detect:[7,27],determin:[4,5,12,26,27,29],develop:[],deviat:[8,16,17,22,23,24,29,50,53,55],dfit:[],diasabl:3,diff:40,differ:[8,12,23,24,29,33,37,39,66,67],differenti:66,diivis:[],diivisionvdiv:[],dimens:[61,62,63],dimension:[],diplai:[],dipolar:[0,1,4,5,7,8,11,12,13,17,22,23,24,27,32,38,42,45,64,68],dipolarkernel:[8,19,33,34,35,36,38,39,40,41,42,43,44,68],dipolarsign:[33,36,37,38,39,40,41,42,43,44,68],directli:[1,65],directori:[6,31],disabl:30,discrep:24,discret:[21,65,66],discuss:[],dispers:9,displai:[6,12,13,17],distanc:[0,4,7,8,11,12,13,14,17,21,23,24,26,27,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,65,66,67,68],distirbut:[],distribut:[0,4,7,8,11,12,13,15,17,24,29,36,37,38,39,40,41,42,43,45,47,48,49,50,51,52,53,54,55,56,65,66,67,68],distributionauthor:[],distributionbilevel:[],distributionbimod:[],distributionmix:[],distributionp:[],distributionpfit:[],distributionr:[],distributionrmean:[],distributionspfit1:[],distributionth:[],distributiontrimod:[],distributionunimod:[],diverg:[],divergencestop:17,divid:41,divis:41,doc:12,document:[12,45],doe:[13,24],doi:26,doing:12,domain:[0,7,10,11,12,14,19,21,23,32,34,35,36,40,46,65,68],done:16,doubl:45,down:[],download:45,dqc:45,drawnow:[36,40],drawnowend:[],dta:[],due:[],dure:12,dynam:[],dynamicstat:[],each:[8,11,12,13,17,23,25,29,67],easili:[],eastoutsid:[],eement:[],effect:25,either:[],electron:[7,8,27,45],element:[1,9,10],els:36,emagr:65,empir:27,emploi:[7,10,11,12,13,17,24,66],empti:[1,2,7,8,10,11,12,13,17,23,24,25],emul:[],enabl:[3,12,13,24,30],end:[10,25,35,36,39,40,42,43],endcutoff:[],enforc:[19,24],engin:[],enhanc:66,enough:[],ensembl:[],ensur:[],enter:66,entri:6,environ:31,epr:[],equal:[12,13,19,24],equat:[18,27,47,48,49,50,51,52,53,54,55,57,58,59,60,61,62,63,65],equival:65,erf:[],error:[24,43],essenti:[],establish:[],estim:[10,16,22],estimatorspup:[],eta:67,etc:45,ethz:[],eval:25,evalu:[11,12,13,17,23,24,25],evalut:[],even:[],everi:[],evolut:7,exact:[],exactli:[],exampl:[1,2,7,9,10,11,12,13,17,20,22,23,24,25,30,33,34,35,36,37,38,39,40,41,42,43,45],exce:[12,13,17],excit:[1,7],excitationbandwidth:[1,7],execut:[],exit:[12,13,31],exp:[7,41,47,48,49,50,51,52,53,54,55],expand:[],expect:[45,66],experi:[1,7,8,18,36,37],experimen:7,experiment:[6,7,8,32,45,68],experiment_exampl:[],explanatori:[],explicit:7,explor:[],expon:51,exponenti:[4,40,57,61,62,63,68],extract:[],extrapol:24,eye:19,fabrega:[],facealpha:35,facilit:[],fact:25,factor:[1,7,8,25,65],factorf:[],factori:25,factorsfactor:[],factorslet:[],factorsoverton:[],factorsselect:[],fail:[],fals:[3,10,13,17,20,24,25,30,36],fast:[7,9,13,17,66],faster:66,fastern:[],fcn:[19,25],fcnhandl:[36,40],fcnname:[],featur:66,fequenc:28,few:68,fft:9,fftspec:44,field:[1,20],figur:[38,42,43],file:[6,31],filenam:6,fill:35,filter:[14,30],find:[24,33,66],finer:24,fir:[14,30],first:[20,25,30,40,43,45,50,53,55,58],fit:[2,3,4,10,11,12,13,15,17,19,23,24,32,34,35,41,42,45,68],fitbackground:[2,34,35,41,44,68],fitdo:[],fitfitpar:[],fitfor:[],fitfth:[],fitmultigauss:[38,44],fitpar:[],fitparamodel:[11,13,19,23,36,39,40,42,43,44],fitpfit:[],fitregmodel:[34,35,36,40,41,44,68],fitsinc:[],fitsvfit:[],fitth:[],fittingw:[],fitvfit:[],fitzke:[],five:47,fiven:[],fix:[8,10,29],fliplr:35,flipud:[],fmincon:[12,13,17],fminsearch:12,fminsearchcon:12,fnnl:[13,17],focus:[],folder:31,follow:[1,2,7,12,16,20,21,31,46,65,67,68],followig:[],fontsiz:33,forc:[],form:[7,8,65,67],format:[],forward:[30,65],forwardbackward:30,found:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],four:48,fourier:[9,66],fourth:6,fpass:30,fprintf:38,frac:[7,13,27,47,48,49,50,51,52,53,54,55,65,66,67],fractal:[61,62,63],fraction:[],free:[12,45],frei:[],freqaxi:1,frequenc:[1,7,8,9,27,28,30,65],fresnel:7,from:[0,6,7,8,12,13,16,19,21,22,24,25,27,28,29,31,36,40,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66],fsamp:30,fstop:30,full:[6,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],fulli:[],func2str:42,functiond:[],functionsdipolar:[],fundament:[],further:2,futur:45,fwhm1:39,fwhm2:39,fwhm:[11,47,48,49,52,54],fwhm_max:11,fwhm_min:11,gain:[],gamma:[49,67],gamma_1:[47,48,52,54],gamma_2:[47,48,52,54],gamma_3:[47,48,52],gamma_4:[47,48],gamma_5:47,gamma_:65,gamma_a:[7,65],gamma_b:[7,65],gamma_i:[47,48,52,54],gauss:[11,38],gaussian:[4,8,11,29,38,43,45,47,48,49,52,53,54,68],gausswlc:[],gca:[17,25,33,38,42,43],gcv:24,gener:[0,8,15,22,24,29,32,36,38,39,40,41,42,43,45,67],generatorrng:[],geq:67,get:[31,33,36,40],ghost:26,github:[31,45],give:[],given:[2,3,5,7,8,10,11,17,18,24,27,30,42,65,67,68],gladd:12,global:[12,13,24,32],globalweight:[12,13,24],gml:[24,33],gmlidx:33,gobal:[],golden:[],good:[],grid:[7,21,24,33,34,35,36,37,38,39,40,41,42,43],groun:[],ground:[],gsvd:22,guess:[12,19,23,36,39,40,43],gunnar:[27,65],gvalu:[7,8],gyromagnet:65,hagen:26,hand:[],handl:[2,10,11,12,15,17,19,23,25,36,40],handlemyfcn:[],harmon:[],has:[65,66,67],have:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],hbar:[7,65],help:[],henc:[],here:68,higher:66,highest:[],highli:67,hinderberg:[],hold:[33,35,38,42],home:31,homogen:[],how:[37,68],howev:67,http:26,huang:66,huber:[13,17,24,67],huberparam:[13,24],i_0:[50,53,55],idea:[],identif:[],identifi:[],idx:12,ill:[12,13,24,67],imag:[9,34,35],imaginari:[3,9],impec:[],implement:[12,17,24,27],impos:66,improv:65,includ:[6,7,8,24,39,43,46,65],increas:[12,13,17,24,66],incud:[],index:[2,5,12,23],indic:[],individu:[12,13,24,39,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],induc:[],infer:[],infinit:[1,7],influenc:67,info:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],inform:[11,12,13,23,24,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],infti:65,init:[12,19],initi:[19,23,36,39,40,43],initialguess:10,inlfuenc:[],inner:[],input:[1,2,3,5,7,8,9,10,11,12,13,15,17,19,20,22,23,24,25,27,28,29,30],insensit:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],insid:[],inspect:[],instal:[10,12,45],instanc:[],instead:[10,11,13,17],instruct:[],int_:[7,65],integ:[8,29],integr:[7,13],intens:[],inter:25,interact:[1,7,25],intercept:[58,59,60],interchang:[],interf:[],interfac:31,interfer:[7,8,36,37],intermedi:[],interv:[],introduc:[65,66],introduct:[],intuiton:[],invers:[13,24,65,66,67],involv:[],iqr:25,is5pdeer:36,isol:[],iter:[12,13,17],its:[6,7,25,45,66],itself:66,jeschk:[27,65,66],jmr:[7,66],journal:[],just:[],k_1:[61,63],k_1t:[61,63],k_2:[61,63],k_2t:[61,63],kaiser:30,kapt:[],kattnig:[],kernel:[0,1,7,11,12,13,17,22,23,24,33,36,40,41,64,68],kernelk:[],kernelkapt:[],kernelkb:[],kernelsinc:[],kernelsk1:[],kernelth:[],kind:[50,53,55],knot:7,know:[],kpar:[],kreplace_with_dash_dash:[],kurtosi:[],l_n:66,l_np:66,l_p:56,label:[51,66],lam:[39,43,68],lambda0:36,lambda:[7,10,34,35,36,39,40,43,65],lambdafit:41,lambdaparam0:[],lampar:[],larg:66,larger:66,largest:[],last:[7,8,10,16,23,25],later:[],latest:[31,45],launch:[36,40],lead:66,least:[12,13,17,65,67],left:[7,27,47,48,49,50,52,53,54,55,65,67],legend:[33,34,35,37,38,41,42,43],length:[9,19,21,27,28,29,34,35,39,42,56,67],leq:[],less:[],let:[],lett:[],level:[8,16,17,24,29,30,37,43,67],levelv:[],lift:[13,24],like:56,likelihood:24,limit:[7,56,66],line:[31,68],linear:[7,12,13,17,65,66],linearli:20,linestyl:35,linewidth:[33,34,35,36,37,38,39,40,41,42,43],linspac:[8,20,33,34,35,36,37,39,40,41,42,43,68],list:[11,23],llinear:[],load:[6,34,35],loader:[],local:[],locat:[],log:33,logarithm:[10,22],logfit:10,logpen:33,logr:33,logresolut:22,logspac:24,longer:[12,13,17,24],longitudin:18,longleftrightarrow:66,longpass:44,loss:[],low:30,lower:[11,12,13,17,19,23,24,25,36,39,40,43,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,66],lowest:[],lowpass:[14,30],lridx:33,lsq:12,lsqnonlin:[10,12],lsqnonneg:[12,13],lui:[],m_i:67,m_j:67,magnet:[],magnitud:9,mai:[31,67],main1:25,main2:25,main:25,mainli:[],major:[45,66],make:[],mallow:24,mani:[],manipul:[],manual:3,map:[],markers:33,math:[],mathbf:[7,13,65,67],mathrm:[],matlab:[8,12,29,31,45],matric:[12,13,24,66],matrix:[1,7,11,17,21,25,66],max:[7,8,27,35,36,37],maxfunev:[12,13,17],maxgauss:[],maxim:[17,18,27],maximum:[11,12,13,17,24,38],maxit:[12,13,17],maxouterit:17,mcl:[24,33],mean:[10,11,13,14,20,23,26,39,40,47,48,49,50,52,53,54,55],measur:[],med1:25,med2:25,med:25,media:[],median:25,memori:18,mention:[],messag:[12,13],method1:24,method2:24,method3:24,method:[7,13,17,23,24,31,32,35,65,67],methodn:24,methodpfit:[],metric:[11,38,42],mhz:[1,7,27],microsecond:[6,68],might:[],min:27,min_:67,minim:[3,12,13,17,27,30,67],minima:24,minimalattenu:30,minimum:[],minmiz:12,minor:45,misfit:[],mix:[15,18,37,41],mixer:[],mixmodel:44,mod:[19,36],moddepth:[8,10,36,37,39,40,41,43,68],mode:40,model1:[15,23],model2:[15,23],model:[2,4,7,8,10,11,12,13,15,17,19,23,24,31,32,36,37,38,40,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,66,68],modelat:[],modelauthor:[],modeleven:[],modelfit:[],modelinfo:[],modellet:[],modelmodel:[],modeln:[15,23],modelour:[],modelparam:2,modelpfit:[],modelrd_onerice_onegauss:[],modelsmodel:[],modelthi:[],modifi:[50,53,55],modlat:[],modul:[7,8,10,11,40,43,65],molecular:[],more:[],most:[],mu_0:[7,65],much:[],multi:[11,26,38],multigauss:[11,32],multipl:[12,13,24,25],multipli:8,multipuls:[7,8],multistart:[],mus:[34,35,36,37,38,39,40,41,42,43],must:[0,7,8,12,13,15,17,19,20,23,24,25,29,31],mutli:45,my5pdeer:36,myanalysi:[],myfcn:[],mymodel:[15,39,40,43],mypath:31,myvalfcn:25,myvalid:35,n1xm:[12,13,24],n2xm:[12,13,24],n_i:67,name:[1,2,6,7,8,9,10,11,12,13,17,20,22,23,24,25,30,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],nan:[],nanomet:68,nanosecond:[],naturali:[],nbsp:[],ncp:24,necessari:[],need:[],neg:[13,17,24],neglib:[],newmodel:15,next:[],ngauss:[11,38,42],ngaussxn:11,nice:[],nitroxid:27,nknot:[],nlsqbnd:[10,12],nmlam:[],nmn:[],nmnote:[],nmp:[],nmrmax:[],nmw:[],nmwidth:[],nois:[8,16,17,22,24,29,38,42,43,67],noisedevi:22,noiseless:8,noiselevel:[8,17,24,33,36,38,39,40,41,42,43,44,68],noiselevelaim:17,noisi:38,non:[12,13,17,24],none:35,nonnegconstrain:[13,24],nopt:[11,38],norm:3,normal:[1,3,4,7,12,13,24],normalizationfactor:1,nosches:66,note:[],now:[],nparam:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],nu_0:[27,51],number:[7,8,9,11,12,13,16,17,19,21,24,26,29,38,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,66],numer:[7,12,13,17,20,23,25],numeri:13,nxm:[7,11,12,13,17,22,23,24],nyquist:28,obir:44,object:17,observ:[],obtain:[7,36,40,66],off:[12,13],offici:[],offlin:[],offset:3,often:67,old:[],older:27,omega:7,omega_:[7,65],omit:6,onc:[12,13,17,24],one:[12,13,15,24,40,66,68],onegaussian:[8,15],onegausswlc:[],ones:[],onli:[12,13,17,24,25,68],onplot:[],onset:[],onxlabel:[],onxlim:[],open:31,oper:[13,17,21,22,24,64],opt:[12,23],optidx:42,optim:[2,10,11,12,13,17,23,24,31,33,38,42],optimizationparamfit:[],optimum:24,option:[0,31],order:[1,2,7,8,9,10,11,12,13,17,18,20,21,22,23,24,25,30,31,50,53,55,58,59,60,65,66,67],org:26,orient:7,origin:[41,67],oscil:66,osher:17,other:[11,23,25],otherwis:[],ouput:30,our:[],out1:25,out2:25,out:[],output:[4,7,8,9,10,13,24,25,27,28,29],over1:[],over2:[],over3:[],over4:[],over:[12,13,24],overcoeff:[37,41],overton:[7,8,37,41,44,65],overtonecoeff:[7,41],own:[],p25:[],p75:[],p_0:[58,59,60],p_1:[58,59,60],p_1t:[58,59,60],p_2:[59,60],p_2t:[59,60],p_3:60,p_3t:60,p_k:[7,65],packag:45,page:[],pair:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],pake:[0,1],papt2:[],papt3:[],papt:[],par0:[],par1:23,par:6,parafit0:36,parafit:[36,40],param0:[12,19,23,36,38,39,40,42,43],param1:[25,39],param2:[25,39],param3:[25,39],param:[8,10,11,12,20,23,36,38,39,40,43,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],paramagnet:[],paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,33,35,38,39,40,42,43,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,67],parameter:[15,19,45],parametersk:[],parametersplot:[],parametersrmean:[],parametersupp:[],parametersw:[],parameterth:[],parameterwhil:[],parametr:[4,10,11,12,15,19,23,32,36,40,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],paramfit:42,paramodel:[43,44],paramt:12,paramter:40,parn:23,parpar:[],part:3,partial:66,particl:[],particular:66,pass:[1,2,3,7,8,9,10,11,12,13,14,15,17,19,20,21,22,23,24,25,30,65],passband:[14,30],path:[6,31],pathinfo:[],pathwai:[],pattern:[],patternnow:[],pdiv:[],pen:[24,33],penalti:[24,66,67],peptid:51,per:[],percentil:25,perform:[3,25,40,45],periodogram:24,permeabl:65,permut:[20,25],persist:56,perturb:67,peval:[11,38],pfit0:36,pfit1:39,pfit2:[39,41],pfit3:39,pfit:[12,34,35,36,38,39,40,41,42,43,68],phase:[3,8,18,30,45],phasev:[],phy:26,physic:[],physrevlett:[],pivot:13,pkb:[],plai:[],plan:[],planck:65,plo:[],plot:[17,25,33,34,35,36,37,38,39,40,41,42,43,68],plotfigur:[],plottig:33,plottingfigur:[],pmean:35,pmed:[],pna:[],point:[1,2,14,16,17,21,27,28,29,30],polynomi:[2,58,59,60],pos:[2,5],pose:67,posed:[12,13,24,67],posit:[2,33],possibl:[3,20],posterior:[],potenti:[],powder:7,power:[26,29],pparam:39,practic:[],pre:[2,34,35,45],precalcul:[],precis:[12,13,17,24],prefix:46,prepar:[20,33,34,35,36,39,40,41,42,68],prepvalid:44,present:6,preserv:[],previou:[],primari:[],princip:13,principl:24,prior:[],probabl:66,problem:[13,24,65,67],proce:[],procedur:67,process2:25,process:[12,25,32,45],processingbefor:[],product:[31,57,61],program:31,progress:[],proper:[],properli:7,properti:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],property1:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],property2:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],protein:51,provid:[8,45],pseudo:[13,17,24,29,67],pseudorandom:[],pstd:35,psub:[],publish:65,puls:[7,32,37,64],pup:[],px2:[],px3:[],quad:[],quadratur:[],qualiti:67,quantum:65,quarter:16,quick:[],quickli:[],r1_2:[],r_0:51,r_1:[43,47,48,52,53,54,55],r_2:[43,47,48,52,53,54,55],r_3:[47,48,52,53],r_4:[47,48],r_5:47,r_i:[],r_j:[],radian:[3,8],radic:26,radiu:24,rand:[],random:[8,29,51],randomli:[20,25],randperm:[20,25],rang:[20,22,24,25],rangin:[],rapt:[],rate:[30,40,57,61,62,63],rather:[],ratio:65,raw:[],rd_:46,rd_fivegaussian:46,rd_fourgaussian:46,rd_gengaussian:[],rd_onegaussian:[19,23,33,37,41,42,46,68],rd_oneric:[23,42,46],rd_onerice_onegauss:[],rd_randcoil:46,rd_shell:[],rd_shellshel:[],rd_shellspher:[],rd_shellvoidshel:[],rd_shellvoidspher:[],rd_skewgaussian:[],rd_sphere:[],rd_spherepoint:[],rd_spheresurf:[],rd_threegaussian:[42,46],rd_threeric:[42,46],rd_twogaussian:[36,38,39,40,42,43,46],rd_tworic:[42,46],rd_wormchain:46,rd_wormgauss:[],rdistanc:[],reach:[12,13,17,24],react:67,read:[6,65],readi:[],real:[3,9,34,35],realiz:[8,29],reason:[],recomend:[],recommend:[],recov:[],recycl:[],redifin:65,reduc:[34,35],refer:[],refin:24,refinen:24,reflect:12,refocus:[],region:12,regoper:44,regord:[13,17,24],regparamrang:[24,44],regtyp:[],regular:[12,13,17,21,22,24,32,33,34,35,36,41,45,64,68],regularizationauthor:[],regularizationglob:[],regularizationpdiv:[],regularizationpfit:[],regularizationpkb:[],regularizationpsub:[],regularizationsensit:[],regularizationw:[],regularizf:33,reichel:66,rel:[2,7,8,36,43,47,48,52,53,54,55,63],relax:[18,37,41],releas:45,relev:[12,13,17],reli:[],relsearchend:2,relsearchstart:2,relxat:18,remain:[],rememb:[],remov:[],repeatedli:[],replac:67,repo:[],repositori:31,repres:66,request:[9,11,24,25,30],requir:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],res:24,rescal:[],residu:[24,38,51],resolut:[13,22],reson:45,respect:[12,25,65],respons:[],rest:[],restart:31,result:[12,13,17,19,24,25,36,38,40,42],resultsclf:[],resultsfigur:[],resultssubplot:[],retriev:[],rev:[],review:[],rgcv:24,rho:37,rice:[],rician:[50,53,55],ridm:[7,8,18,32,37,45,65],right:[7,27,47,48,49,50,52,53,54,55,65,67],rigid:56,rippl:[],rmax:27,rmean1:[],rmean2:[],rmean:[],rmeanpar:[],rmin:27,rmsd:23,rng:[8,29],robust:24,root:23,rose:[],rough:[],round:[],routin:12,row:[],rpass:14,rsingl:[],run:[34,35,38,39,42,68],s_1:67,s_2:67,s_i:67,s_n:67,sai:[],sake:[],same:[12,13,24,39,43,67],sampl:30,save:31,scalar:[0,2,3,4,5,7,10,11,13,14,16,17,18,19,21,23,24,26,27,28,29,30],scale:[4,8,22,26,51],scalev:[],scenario:66,script:[20,45],scroll:[],search:[2,24,31],second:[20,24,30,40,43,59],section:31,see:[2,11,12,23],segment:[],select:[10,11,13,23,24,31,32,38,45],selectmodel:[42,44],selector:[],self:[],selfcn:24,selmethod:35,selregparam:[2,13,30,33,41,44],sensit:[25,35,67],sensitivan:[20,44],sentiv:[],separ:27,seri:45,set:[8,12,17,19,20,29,31,33,36,38,42,43,45,68],seven:[],sever:[12,13,67],sfit:38,shape:[],share:[],shell:[],shift:[7,8,36],shorter:[],shot:[],should:[7,20,66],show:[],shown:65,sidelob:30,sifter:45,sigma:[43,50],sigma_1:[43,53,55],sigma_2:[43,53,55],sigma_3:53,sigma_4:[],sigma_5:[],sigma_i:67,sigma_j:67,signal:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,22,23,24,26,27,28,30,32,33,36,38,39,40,41,42,43,67,68],signalauthor:[],signalcomput:[],signald:[],signalfit:[],signalglob:[],signallet:[],signalsauthor:[],signalsd1:[],signalsd1fit:[],signalsinc:[],signalsselect:[],signalsv1:[],signalsv:[],signalv:[],signalvdiv:[],signalwhil:[],similar:45,similarli:12,simp:[],simpl:[],simpli:[],simplic:21,simplifi:65,simualt:[],simuat:[],simul:37,simulationlet:[],simultan:[40,67],sin:[7,65],sinc:[7,66],singl:[4,8,12,13,24,45,67],singular:22,situat:[],six:[],size:[12,13,19,21,24],skew:[],slow:7,slower:66,slowli:[],smooth:[0,66],snr:39,softwar:45,sole:[],solut:[13,24,65,66,67],solv:67,solver:[10,12,13,17,24],some:[8,29,45],sought:[],sourc:[],sout:30,spec:9,specif:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],specifi:[1,2,6,7,8,9,10,11,12,13,14,16,17,19,20,22,23,24,25,27,28,30],spectral:6,spectromet:6,spectroscopi:[0,4,5,45,64],spectrum:[9,29],speed:[34,35],sphere:[],spheric:[],spin:[7,8,26,27,65,66],sprintf:[39,40],sqrt:[40,47,48,49,52,54,67],squar:[12,13,17,23,65,67],srgcv:24,srtexp:8,stabil:[66,67],stabl:45,stage:[],standard:[8,16,17,22,24,29,50,53,55],start:[2,10,46],startup:31,stat:[],state:[12,13,17,25],statist:25,std:20,steep:14,step:[24,40,45],still:67,stop:[2,12,13,17,24],stopband:30,str1:20,str2:20,strech:68,stretch:[57,61,62,63],strexp:[8,61,63],string:[6,11,13,17,20,23,24],strong:[24,32],strongli:66,struct:[0,1,6,20,25,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],structur:[0,1,6,12,20,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],stub:[],studi:[],subfold:31,submit:[],subplot:[34,35,36,37,38,39,40,41,42,43,68],subtract:[],subtractionvsub:[],success:[],suffici:[],suit:[],sum:[12,13,24,40,47,48,52,53,54,55,63,67],sum_:[7,65],sum_i:67,sum_j:67,summari:[],superimpos:[],superparamet:[13,24],support:45,suppress:[14,26,66],suppressghost:44,supress:[],sure:[],surfac:[],symbol:[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],synchron:32,syntax:[],synthet:[45,68],system:[26,66],systemat:[],tab:31,tag:[42,43],take:68,taken:7,task:45,td_:46,td_exp:[2,10,11,19,39,40,43,46,58,59,60,68],td_poly1:[2,46],td_poly2:[2,46],td_poly3:[2,46],td_prodstrexp:[2,46],td_srtexp:[],td_strexp:[2,7,8,34,35,41,46],td_sumstrexp:[2,46],tdistanc:[],techniqu:45,templat:[],tend:10,term:[24,45,65,66,67],test:[],tetramod:[],text:27,tfit:10,than:[12,13,17,24],thei:[12,24,45,67],them:33,theori:45,therefor:[7,65,67],theta:[7,65],thi:[1,3,7,8,12,13,16,17,19,20,24,29,45,65,67],thick:[],think:[],third:[3,12,60],those:[],though:[],three:[39,52,53],throughout:16,thu:[],tight:[33,34,35,36,37,38,39,40,41,42,43],tightylabel:[],tikh:[33,41],tikhonov:[12,13,17,24,34,35,36,40,45,67,68],time2dist:[8,36,37,38,40,41,42,43,44,68],time2freq:44,time:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,23,24,27,28,29,32,34,35,36,37,38,40,41,42,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,68],timeaxi:1,timestep:27,timet:[],titl:[36,37,39,40,41],tmax:[],tmin:[],tmix:[37,41],toler:[12,13,17,24],tolfun:[12,13,17,24,36,40],toolbox:[10,12,31,45],top:[],topic:[],total:[13,17,24,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],tough:[],trace:[27,39],transfer:30,transform:[0,1,7,9,34,35,65],transit:[14,30],trasnform:[],traw:[34,35],treat:[],treatment:[],treatmentnow:[],trial:[],trimod:[],trueparam:[39,40,43],truncat:[],trust:12,truth:[41,42],tshift:36,tstart:[10,35],turn:[],tutori:45,twice:[],two:[9,10,19,20,27,38,39,45,54,55,57,61,63],tworic:15,type:[9,12,13,15,17,23,24,45],typic:67,unbound:12,uncertainti:35,unconstrain:[12,19],under:[13,24],undergo:[],underli:66,unfold:51,uniform:29,unimod:[],unit:7,uniti:13,unknown:38,unmodul:[],until:[24,45],upon:[19,66],upper:[11,12,19,23,25,36,39,40,43,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],use:12,used:[6,7,8,10,11,12,13,15,16,24,45],user:[10,12],uses:[],using:[0,7,11,17,30,40,68],usn:[],usnext:[],usnow:[],ustmax:[],usual:[],util:[],uttermost:[],v4pdeer:37,v5pdeer1:37,v5pdeer2:37,v5pdeer3:37,v_i:39,vacuum:65,valfcn:35,valid:[19,20,24,25,32,43],valpar:[25,35],valu:[1,2,3,7,8,9,10,11,12,13,14,17,19,20,22,23,24,25,30],value1:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],value2:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],vara:20,varargin:25,varb:20,vari:[],variabl:[25,36,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,68],variat:[13,17,24],variou:[],varpar:[],varparam:20,vcorr:41,vdiv:[],vecor:[],vector:[3,7,16,20,23,24,26,27,28,29,33],verbos:[12,13],veri:[],version:[27,31,45],vert:67,vert_2:67,vertic:8,vexp:19,vfit0:36,vfit1:39,vfit2:39,vfit3:39,vfit:[12,19,34,35,36,39,40,43,68],via:[4,24,25,31,65],virtual:[],visual:[],vol:65,voltag:[],von:26,vraw:[34,35],vridme1:37,vridme2:37,vridme3:37,vsqrt:[],vsub:[],w_1:[47,48,52,54],w_2:[47,48,52,54],w_3:[47,48,52],w_4:[47,48],w_5:47,w_i:[47,48,52,54,67],wai:7,want:[],web:[],webpag:[],weight:[12,13,24,58,59,60,67],weightsbi:[],weigth:[],well:[7,9,12,13,14,24,45],what:[],when:[10,12],where:[7,8,12,20,27,29,50,51,53,55,65,67],wherea:[66,68],whether:[10,12,13,17,20,24,25,46],which:[0,2,10,17,20,24,67],white:[],whitegaussnois:44,whole:[],whose:[],width:[43,66],wilhelm:[],window:30,winlowpass:44,without:36,wlc:[],work:[],workflow:45,worm:56,worri:[],would:[],wpar:[],wrap:[],write:[],xlabel:[33,34,35,36,37,38,39,40,41,42,43],xlim:[],xtick:42,xtickangl:42,xticklabel:42,yield:7,ylabel:[33,34,35,36,37,38,39,40,41,42,43],ylim:[],you:[],your:[],ytick:38,yticklabel:[38,43],zero:[5,19,30,50,53,55],zerofil:9,zip:[]},titles:["<code class=\"docutils literal notranslate\"><span class=\"pre\">apt</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">aptkernel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">backgroundstart</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">correctphase</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">correctscale</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">correctzerotime</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">deerload</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">dipolarkernel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">dipolarsignal</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">fftspec</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">fitbackground</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">fitmultigauss</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">fitparamodel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">fitregmodel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">longpass</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">mixmodels</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">noiselevel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">obir</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">overtones</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">paramodel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">prepvalidation</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">regoperator</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">regparamrange</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">selectmodel</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">selregparam</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">sensitivan</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">suppressghost</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">time2dist</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">time2freq</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">whitegaussnoise</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">winlowpass</span></code>","Installation","Examples","Selection Methods &amp; L-curve","Basic experimental signal processing","Experimental signal processing with validation","Fitting 5-pulse DEER data","Generating dipolar signals","Multigauss fitting","Global fit of parametric time-domain model","Synchronous background and regularization fitting","Processing RIDME with strong background","Parametric model selection","Parametric time-domain model fitting","Functions","Welcome to\u2026","Parametric Models","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_fivegaussian</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_fourgaussian</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_onegaussian</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_onerice</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_randcoil</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_threegaussian</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_threerice</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_twogaussian</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_tworice</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">rd_wormchain</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_exp</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_poly1</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_poly2</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_poly3</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_prodstrexp</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_strexp</span></code>","<code class=\"docutils literal notranslate\"><span class=\"pre\">td_sumstrexp</span></code>","Theory","The Dipolar Kernel","Regularization operator","Regularization - Basics","Tutorial"],titleterms:{"case":[],"function":44,The:65,addit:[],analysi:[],analyz:68,approach:[],approxim:[],apt:0,aptkernel:1,argument:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],background:[40,41],backgroundstart:2,basic:[34,67],bilevel:[],code:[],coeffici:[],comparison:[],comput:[],correctphas:3,correctscal:4,correctzerotim:5,curv:33,custom:[],data:36,dataset:68,deer:36,deerlab:[],deerload:6,descript:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],develop:[],dipolar:[37,65],dipolarkernel:7,dipolarsign:8,distanc:[],distribut:[],doc:[],document:[],domain:[39,43],download:[],evolut:[],exampl:[8,15,19,32],experiment:[34,35],fftspec:9,fit:[36,38,39,40,43,67],fitbackground:10,fitmultigauss:11,fitparamodel:12,fitregmodel:13,free:[],gauss:[],gener:[37,68],global:[39,67],instal:31,kernel:65,longpass:14,method:33,mix:[],mixmodel:15,model:[39,42,43,46],multi:[],multigauss:38,noiselevel:16,obir:17,oper:66,optim:[],option:[1,2,7,8,9,10,11,12,13,17,20,22,23,24,25,30],overton:18,pake:[],paramet:[],parameter:[],parametr:[39,42,43,46],paramodel:19,pattern:[],physic:68,prepvalid:20,process:[34,35,41],puls:36,rd_fivegaussian:47,rd_fourgaussian:48,rd_gengaussian:[],rd_onegaussian:49,rd_oneric:50,rd_randcoil:51,rd_shell:[],rd_shellshel:[],rd_shellspher:[],rd_shellvoidshel:[],rd_shellvoidspher:[],rd_skewgaussian:[],rd_sphere:[],rd_spherepoint:[],rd_spheresurf:[],rd_threegaussian:52,rd_threeric:53,rd_twogaussian:54,rd_tworic:55,rd_wormchain:56,rd_wormgauss:[],refer:[7,26,65,66,67],regoper:21,regparamrang:22,regular:[40,66,67],releas:[],requir:31,ridm:41,select:[33,42],selectmodel:23,selregparam:24,sensit:[],sensitivan:25,set:[],setup:31,signal:[34,35,37],simpl:[],simul:[],sourc:[],strong:41,suppressghost:26,synchron:40,syntax:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],td_exp:57,td_poly1:58,td_poly2:59,td_poly3:60,td_prodstrexp:61,td_strexp:62,td_sumstrexp:63,theori:64,tikhonov:[],time2dist:27,time2freq:28,time:[39,43],transform:[],treatment:[],tutori:68,unit:68,using:[],valid:35,version:[],visual:[],welcom:45,whitegaussnois:29,winlowpass:30}})