function [err,data,maxerr] = test(opt,oldata)

clear fitparamodel

Dimension = 200;
TimeStep = 0.008;
TimeAxis = linspace(0,TimeStep*Dimension,Dimension);
DistanceAxis = time2dist(TimeAxis);
InputParam = [3 0.5];
Distribution = gaussian(DistanceAxis,InputParam(1),InputParam(2));
Distribution = Distribution/(1/sqrt(2*pi)*1/InputParam(2));
Distribution = Distribution/sum(Distribution);

Kernel = dipolarkernel(TimeAxis,DistanceAxis);
DipEvoFcn = Kernel*Distribution;

InitialGuess = [2 0.1];
tic
[preFitDistribution,FitParam] = fitparamodel(DipEvoFcn,Kernel,DistanceAxis,@onegaussian,InitialGuess);
pre = toc;
tic
[postFitDistribution,FitParam] = fitparamodel(DipEvoFcn,Kernel,DistanceAxis,@onegaussian,InitialGuess);
post = toc;


err(1) = any(abs(preFitDistribution - postFitDistribution)>1e-15);
err(2) = post > pre/4;
err = any(err);

maxerr = max(abs(preFitDistribution - postFitDistribution));
data = [];

if opt.Display
   figure(1),clf,hold on
   plot(TimeAxis,DipEvoFcn,'b')
   plot(TimeAxis,Kernel*FitDistribution,'r')
end

end