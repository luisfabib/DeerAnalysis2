.. _dipolarkernel:

*********************
:mod:`dipolarkernel`
*********************

Computes the dipolar kernel matrix  that transforms a distance distribution to a time-domain dipolar signal.

-------------------------------


Syntax
=========================================

.. code-block:: matlab

    K = dipolarkernel(t,r)
    K = dipolarkernel(t,r,lambda)
    K = dipolarkernel(t,r,pathinfo)
    K = dipolarkernel(t,r,lambda,B)
    K = dipolarkernel(t,r,pathinfo,B)
    K = dipolarkernel(___,'Property',Value)


Parameters
    *   ``t``        - Time axis vector (*N*-element array), in microseconds
    *   ``r``        - Distance axis vector (*M*-element array), in nanometers
    *   ``lambda``   - Modulation depth (scalar)
    *   ``pathinfo`` - Modulation depths, refocusing times, and harmonics (*px2* or *px3* array) for multiple dipolar pathways
    *   ``B``        - Background, either vector of values (*N*-element array) or function handle
Returns
    *  ``K`` - Dipolar kernel matrix (*NxM* array)

-------------------------------


Description
=========================================

.. code-block:: matlab

   K = dipolarkernel(t,r)

Computes the elementary kernel matrix ``K`` for the time axis ``t`` (in microseconds) and distance axis ``r`` (in nanometers).The dipolar kernel is normalized by `\Delta r`, such that it returns a dipolar signal with amplitude 1 at time zero for a normalized distance distribution (i.e. ``trapz(r,P)==1``).


-----------------------------


.. code-block:: matlab

    K = dipolarkernel(t,r,lambda)

If the modulation depth ``lambda`` (a number between 0 and 1) is specified, then it is included into the kernel matrix.


-----------------------------


.. code-block:: matlab

    K = dipolarkernel(t,r,lambda,B)

If the background ``B`` and modulation depth ``lambda`` are specified, then both are included into the kernel matrix. ``B`` can be either an array with the pre-calculated background decay (over ``t``), or a function handle with a background model.

-------------------------------


.. code-block:: matlab

    K = dipolarkernel(t,r,pathinfo)
    K = dipolarkernel(t,r,pathinfo,B)

For a multi-pathway DEER signal (e.g, 4-pulse DEER with 2+1 contribution; 5-pulse DEER with 4-pulse DEER residual signal, and more complicated experiments), ``pathinfo`` is a 2D array that contains a list of modulation depths (amplitudes), refocusing times (in microseconds), and optional harmonics for all modulated pathway signals. 

Each row of ``pathinfo`` contains two values: one modulation depth and one refocusing time. For a pathway with unmodulated signal, set the refocusing time to ``NaN``.

Optionally, the harmonic (1 = fundamental, 2 = first overtone, etc.) can be given as a third value in each row. This can be useful for modeling RIDME signals. If not given, the harmonic is 1 for all pathways.

In these cases, the background model must be specified as a function handle accepting the time-axis ``t`` and pathway amplitude ``lambda`` as inputs, i.e. ``B = @(t,lambda) bg_model(t,param,lambda)``.

Example 1:
	To specify the standard model for 4-pulse DEER with an unmodulated offset and a single dipolar pathway that refocuses at time 0, use

.. code-block:: matlab

    lambda = 0.4; % modulation depth main signal
	
    pathinfo = [1-lambda NaN; lambda 0];
	
    % alternative input
    pathinfo(1,:) = [1-lambda NaN];    % unmodulated part, gives offset
    pathinfo(2,:) = [lambda 0];        % main modulation, refocusing at time zero
	
    K = dipolarkernel(t,r,pathinfo);

The shorthand input syntax ``dipolarkernel(t,r,lambda)`` is equivalent to this input.

Example 2:
	To specify a more complete 4-pulse DEER model that includes the 2+1 contribution, use

.. code-block:: matlab

	Lambda0 = 0.5;   % unmodulated part
	lambda = 0.4;    % modulation depth main signal
	lambda21 = 0.1;  % modulation depth 2+1 contribution
	tau2 = 4;        % refocusing time of 2+1 contribution
	
	pathinfo(1,:) = [Lambda0  NaN];     % unmodulated part, gives offset
	pathinfo(2,:) = [lambda4  0];       % main modulation, refocusing at time zero
	pathinfo(2,:) = [lambda21 tau2];    % 2+1 modulation, refocusing at time tau2
	
	K = dipolarkernel(t,r,pathinfo);


-------------------------------



Additional Settings
=========================================


Additional settings can be specified via name-value pairs. All property names are case insensitive and the property-value pairs can be passed in any order after the required input arguments have been passed.

.. code-block:: matlab

    K = dipolarkernel(___,'Property1',Value1,'Property2',Value2,___)

- ``'ExcitationBandwidth'`` - Excitation bandwidth of the pulses in **MHz**. 
    Use this to include limited excitation bandwidth of the experimental pulses. If not specified, infinite excitation bandwidth is assumed.

    *Default:* [*empty*]

    *Example:*

    .. code-block:: matlab

        K = dipolarkernel(___,'ExcitationBandwidth',50)     % 50 MHz excitation bandwidth

- ``'OvertoneCoeffs'`` - RIDME overtone coefficients
    1D array containing the overtone coefficients for RIDME experiments. If passed, the dipolar kernel overtones are calculated based on the passed coefficients.

    *Default:* [*empty*]

    *Example:*

		.. code-block:: matlab

			K = dipolarkernel(___,'OvertoneCoeffs',[0.4 0.2 0.4])   % fundamental, 1st, and 2nd overtone

- ``'g'`` - Electron g-value
    Specifies the two g-values of the electron spin centers used to compute the dipolar frequencies from the given distance axis.

    *Default:* free-electron g value

    *Example:*

		.. code-block:: matlab

			K = dipolarkernel(___,'g',[2.01 2.1])

- ``'Method'`` - Kernel matrix calculation method
    Specifies the method the kernel matrix is computed numerically.

    *   ``'fresnel'`` - Uses Fresnel integrals. This method is fast and accurate.

    *   ``'integral'`` - Uses MATLAB's ``integral()`` function. This method is accurate, but slow.

    *   ``'grid'`` - Uses orientation averaging over a grid of orientations, using the number of orientations given in ``nKnots``. This method is slow, and it converges very slowly with the number of orientations.

    *Default:* ``'fresnel'``

    *Example:*

		.. code-block:: matlab

			K = dipolarkernel(___,'Method','integral')

- ``'nKnots'`` - Number of orientations for orientation averaging
    If the kernel is computed using ``'grid'``, this options specifies the number of orientations between :math:`\theta=0` and :math:`\theta=\pi/2` used for orientation averaging.

    *Default:* ``5001``

    *Example:*

    .. code-block:: matlab

        K = dipolarkernel(___,'Method','grid','nKnots',1e4)

- ``'Renormalize'`` - Re-normalization of multi-pathway dipolar kernels
    If the kernel is computed for a multi-pathway model via the ``pathinfo`` variable, the kernel does not necessarily satisfy ``V(0) == 1``. This option enables(``true``) or disables(``false``) a re-normalization to ensure that equality is satisfied.

    *Default:* ``true``

    *Example:*

    .. code-block:: matlab

        K = dipolarkernel(___,'Renormalize',false)
