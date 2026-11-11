# 최대 절댓값 원리

# 개요

**최대 절댓값 원리(maximum modulus principle)** 는 상수가 아닌 정칙함수의 절댓값이 영역의 안쪽 점에서 최댓값을 갖지 않는다는 정리다. 닫힌 단위원판에서 $\vert z^2+1\vert$ 의 최댓값을 구하려면 원판의 모든 점을 볼 수 없다.

이 정리는 최댓값이 경계에서 나온다고 정해 주어 문제를 원 위로 옮긴다. 원 위에서 $\vert e^{2i\theta}+1\vert=2\vert\cos\theta\vert$ 이므로 최댓값은 $2$ 이고 $z=\pm 1$ 에서 나온다.

# 직관

$f(z)=z^2+1$ 은 원점에서 $1$ 이다. 원점을 중심으로 반지름 $1/2$ 인 원 위에서 $f$ 는 $1+e^{2i\theta}/4$ 이고, 이 값들의 평균은 $1$ 이다. 원 위의 값이 평균 $1$ 둘레에 고르게 퍼져 있으므로 절댓값이 $1$ 보다 큰 점, 예를 들어 $\theta=0$ 의 $5/4$ 가 있다.

정칙함수는 어느 점에서나 이렇게 둘레 원 위 값들의 평균이다. 원 위의 값의 절댓값이 모두 $\vert f(a)\vert$ 이하이면서 평균이 $f(a)$ 가 되려면 원 위의 값이 모두 $f(a)$ 와 같아야 한다. 그러면 함수가 상수가 되므로, 상수가 아닌 함수의 절댓값은 안쪽 점에서 가장 클 수 없다.

# 정의

**영역(domain)** 은 복소평면의 연결된 열린집합이다. 단위원판과 고리 $1\lt\vert z\vert\lt 2$ 는 영역이고, 두 원판의 서로 떨어진 합집합은 영역이 아니다.

$f$ 가 영역 $\Omega$ 에서 [정칙함수](holomorphic-functions.md)일 때, $a\in\Omega$ 의 어떤 근방에서 $\vert f(z)\vert\le\vert f(a)\vert$ 이면 $\vert f\vert$ 가 $a$ 에서 **국소 최대(local maximum)** 라 한다. 상수함수는 모든 점에서 국소 최대다. $z^2+1$ 은 원점에서 국소 최대가 아니다.

# 성질

## 평균값 등식

$f$ 가 닫힌 원판 $\vert z-a\vert\le r$ 을 포함하는 열린집합에서 정칙이면 다음이 성립한다.

$$
f(a)=\frac{1}{2\pi}\int_0^{2\pi}f(a+re^{i\theta})\thinspace d\theta
$$

Cauchy 적분 공식에 $z=a+re^{i\theta}$, $dz=ire^{i\theta}d\theta$ 를 넣으면 나온다.

## 최대 절댓값 원리

*정리.* $f$ 가 영역 $\Omega$ 에서 정칙이고 $\vert f\vert$ 가 어떤 점 $a\in\Omega$ 에서 국소 최대이면 $f$ 는 $\Omega$ 에서 상수다[^1].

*증명의 요지.* $a$ 근방의 작은 반지름 $r$ 마다 평균값 등식에서 다음이 성립한다.

$$
\vert f(a)\vert\le\frac{1}{2\pi}\int_0^{2\pi}\vert f(a+re^{i\theta})\vert\thinspace d\theta\le\vert f(a)\vert
$$

두 부등식이 모두 등호이므로 원 위에서 $\vert f\vert=\vert f(a)\vert$ 다. 그러므로 $\vert f\vert$ 는 $a$ 의 근방에서 상수이고, Cauchy–Riemann 방정식에서 $f$ 가 그 근방에서 상수다. [해석적 연속](analytic-continuation.md)의 항등정리로 $f$ 는 $\Omega$ 전체에서 상수다. ∎

## 유계 영역의 꼴

$\Omega$ 가 유계 영역이고 $f$ 가 폐포 $\overline\Omega$ 에서 연속이며 $\Omega$ 에서 정칙이면 $\vert f\vert$ 의 $\overline\Omega$ 위 최댓값은 경계 $\partial\Omega$ 에서 나온다. $\overline\Omega$ 가 콤팩트이므로 최댓값이 어딘가에서 나오고, 안쪽 점이면 정리에서 $f$ 가 상수다.

유계 조건은 빼지 못한다. 띠 $\vert\mathrm{Im}\thinspace z\vert\lt\pi/2$ 에서 $f(z)=\exp(e^z)$ 는 경계선 $\mathrm{Im}\thinspace z=\pm\pi/2$ 위에서 $e^z=\pm ie^x$ 이므로 $\vert f\vert=1$ 이지만, 실수축 위에서 $\exp(e^x)$ 로 한없이 커진다.

## 최소 절댓값 원리

$f$ 가 영역에서 정칙이고 영점이 없으면 $1/f$ 에 정리를 적용해, $\vert f\vert$ 가 안쪽 점에서 국소 최소가 아니거나 $f$ 가 상수다. 영점 조건은 빼지 못한다. $f(z)=z$ 는 단위원판에서 $\vert f\vert$ 가 원점에서 최소다.

## Hadamard 세 원 정리

$f$ 가 고리 $r\_1\lt\vert z\vert\lt r\_2$ 를 포함하는 닫힌 고리에서 정칙이고 $M(r)=\max\_{\vert z\vert=r}\vert f(z)\vert$ 로 두면, $\log M(r)$ 은 $\log r$ 의 볼록함수다(Hadamard three-circle theorem)[^1]. 증명은 실수 $\lambda$ 를 골라 $\vert z\vert^\lambda\vert f(z)\vert$ 의 최댓값을 두 경계원에서 같게 만든 뒤 최대 절댓값 원리를 쓴다.

# 활용

- [등각사상](conformal-mapping.md)의 Schwarz 보조정리는 $f(z)/z$ 에 이 원리를 써서 $\vert f(z)\vert\le\vert z\vert$ 를 얻는다.
- [Riesz–Thorin 정리](riesz-thorin.md)는 띠 위의 Hadamard 세 선 정리(Hadamard three-lines theorem)로 증명되고, 세 선 정리는 띠에서 유계인 함수에 대한 이 원리의 판이다.
- [Blaschke 곱](blaschke-products.md)으로 유계 정칙함수의 영점을 나누는 논증과 [Nevanlinna–Pick 보간](nevanlinna-pick-interpolation.md)의 Schur 알고리즘은 몫 함수의 절댓값이 $1$ 이하임을 이 원리로 보인다.
- [Rouché 정리](rouche-theorem.md)에서 나오는 열린 사상 성질은 이 원리의 다른 증명을 준다. 상이 열린집합이면 $\vert f\vert$ 가 더 큰 값을 근방에서 취한다.
- [Baker 정리](baker-theorem.md)의 증명은 보조 함수에 이 원리를 반복 적용해 영점의 수를 늘린다.

[^1]: J. B. Conway, *Functions of One Complex Variable I*, 2nd ed., Springer, 1978, Chapter VI §1, §3 — 최대 절댓값 원리와 Hadamard 세 원 정리.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis
