function [pass,maxerr] = test(opt)

M = 200;
t = linspace(0,4,M);
r = time2dist(t);
B = bg_exp(t,0.3);
P = dd_gauss(r,[4,0.3]);
V = dipolarsignal(t,r,P,0.3,B,'noiselevel',0.02);

Parameters.regparam = linspace(10,50,3);
Parameters.Bmodel = {@bg_exp,@bg_strexp};

if opt.Display
    f = figure(1); clf;AxisHandle = axes(f);
else
    AxisHandle = [];
end

fcnHandle = @(param)myfitting(param,t,r,V);

[stats] = sensitivan(fcnHandle,Parameters,'AxisHandle',AxisHandle);

pass = length(stats) == 2;
 
maxerr = NaN;

if opt.Display
    cla
    subplot(121)
    hold on
    plot(r,meansOut{1},'b','LineWidth',1)
    f = fill([r fliplr(r)] ,[Upper{1} fliplr(Lower{1})],...
        'b','LineStyle','none');
    f.FaceAlpha = 0.5;
    axis tight, grid on, box on
    subplot(122)
    hold on
    plot(t,meansOut{2},'b','LineWidth',1)
    f = fill([t fliplr(t)] ,[Upper{2} fliplr(Lower{2})],...
        'b','LineStyle','none');
    f.FaceAlpha = 0.5;
    axis tight, grid on, box on
end

end


function [Pfit,Bfit] = myfitting(param,t,r,V)

[Bfit,lambdafit] = fitbackground(V,t,param.Bmodel);

K = dipolarkernel(t,r,lambdafit,Bfit);
regparam = param.regparam;
Pfit = fitregmodel(V,K,r,'tikh',regparam);

end