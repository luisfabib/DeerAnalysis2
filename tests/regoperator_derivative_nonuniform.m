function [pass,maxerr] = test(opt)

% Check that that the finite difference matrix returned by regoperator
% correctly estimates the derivative of a Gaussian on non-uniform grid

r = linspace(0,4.5^9,2500).^(1/9);
r = r(:);
dr = mean(diff(r));

% Distance axes for the derivatives
r0 = r;
r1 = r(2:end) - dr/2;
r2 = r(3:end) - dr;
r3 = r(4:end) - 3*dr/2;

% Test function
sig = 0.2;
rmean = 3.5;
P = 1/sig/sqrt(2*pi)*exp(-(r - rmean).^2/2/sig^2);

% Analytical derivatives of the Gaussian function
dP0ref = P;
dP1ref = -(r1 - rmean)./sig^3/sqrt(2*pi).*exp(-(r1 - rmean).^2/2/sig^2);
dP2ref = -(sig^2-(r2 - rmean).^2)./sig^5/sqrt(2*pi).*exp(-(r2 - rmean).^2/2/sig^2);
dP3ref = -((r3 - rmean).^3 - 3*((r3 - rmean))*sig^2)./sig^7/sqrt(2*pi).*exp(-(r3 - rmean).^2/2/sig^2);

% Numerical finitie difference operators
L0 = regoperator(r,0);
L1 = regoperator(r,1);
L2 = regoperator(r,2);
L3 = regoperator(r,3);

% Estimated derivatives of the Gaussian function
dP0 = L0*P;
dP1 = L1*P;
dP2 = L2*P;
dP3 = L3*P;


%Pass 1: 1st derivative is accurate
pass(1) = all(abs(dP0 - dP0ref)<1e-5);
%Pass 2: 1st derivative is accurate
pass(2) = all(abs(dP1 - dP1ref)<5e-2);
%Pass 3: 2nd derivative is accurate
pass(3) = all(abs(dP2 - dP2ref)<5e-1);
%Pass 4: 3rd derivative is accurate
pass(4) = all(abs(dP3 - dP3ref)<5e+0);

maxerr = max(abs(dP2 - dP2ref));

if opt.Display
    subplot(221)
    plot(1:numel(r0),dP0ref,'k-',1:numel(r0),dP0,'b--','LineWidth',1.5)
    axis tight, grid on
    legend('reference','LP')
    subplot(222)
    plot(1:numel(r1),dP1ref,'k-',1:numel(r1),dP1,'b--','LineWidth',1.5)
    axis tight, grid on
    legend('reference','LP')
    subplot(223)
    plot(1:numel(r2),dP2ref,'k-',1:numel(r2),dP2,'b--','LineWidth',1.5)
    axis tight, grid on
    legend('reference','LP')
    subplot(224)
    plot(1:numel(r3),dP3ref,'k-',1:numel(r3),dP3,'b--','LineWidth',1.5)
    axis tight, grid on
    legend('reference','LP')
end

end