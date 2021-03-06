.. highlight:: matlab
.. _correctphase:


***********************
:mod:`correctphase`
***********************

Phase correction of complex-valued data

-----------------------------


Syntax
=========================================

.. code-block:: matlab

    Vr = correctphase(V)
    Vr = correctphase(V,ph)
    Vr = correctphase(V,[],oc)
    Vr = correctphase(V,ph,oc)
    [Vr,Vi,ph,io] = correctphase(V)


Parameters
    *   ``V`` - Complex-valued signal (*N*-element array or *NxM*-element array)
    *   ``ph`` - Correction phase (scalar), in radians
    *   ``oc`` - Imaginary offset correction (boolean)
Returns
    *   ``Vr`` - Real part of the phase-corrected signal (*N*-element array)
    *   ``Vi`` - Imaginary part of the phase-corrected signal (*N*-element array)
    *   ``ph`` - Correction phase (scalar), in radians
    *   ``io``  - Imaginary offset (scalar)

-----------------------------


Description
=========================================

.. code-block:: matlab

     Vr = correctphase(V)

Performs a phase correction of the complex-valued data ``V`` that minimizes the norm of the imaginary component of the data. The phase-corrected data is returned in ``Vr``.

If a two-dimensional complex-valued dataset ``V`` of size *NxM* is provided, the phase correction is performed individually on each of the *M* columns.  


-----------------------------


.. code-block:: matlab

     Vr = correctphase(V,ph)

Applies a phase correction with a given phase angle ``ph`` (in radians) to input data vector ``V``. If a two-dimensional complex-valued dataset ``V`` is provided, the number of elements in ``ph`` must match the number of columns in ``V``.


-----------------------------


.. code-block:: matlab

    Vr = correctphase(V,ph,oc)
    Vr = correctphase(V,[],oc)

A third boolean argument ``oc`` can be passed to enable/disable the fitting of a possible offset on the imaginary component of the data (defaults to ``false``). This works with both automatic and manual phase correction.


-----------------------------


.. code-block:: matlab

    [Vr,Vi,ph,io] = correctphase(V)

Returns, in addition to ``Vr``, the imaginary part of the corrected signal ``Vi``, the fitted or applied phase angle ``ph`` (in radians), and the fitted imaginary offset ``io``.


