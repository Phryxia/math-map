# 정칙함수와 Cauchy 적분 정리

# 개요

복소 미분가능성은 실함수의 미분가능성과 겉모습이 같지만 훨씬 강한 조건이다. 극한을 취하는 방향이 평면 전체로 늘어나므로, 열린집합에서 한 번 복소 미분가능한 함수는 자동으로 무한 번 미분가능하고 멱급수로 전개된다. 정칙함수의 닫힌 경로 적분이 사라진다는 Cauchy 적분 정리 하나에서 Cauchy 적분 공식, 해석성, Liouville 정리, 최대 절댓값 원리, 대수학의 기본정리가 차례로 따라온다. 실적분 계산을 경로 적분으로 바꾸는 유수 정리도 같은 뿌리에서 나온다.

# 직관

복소 미분가능성은 "국소적으로 회전과 등방 확대"라는 조건이다. 실이차원 사상으로 보면 Jacobian이 임의의 $2\times2$ 행렬이 될 수 있지만, 복소수 한 개의 곱으로 표현되려면 회전·등방 확대 행렬로 제한된다. 이 제약이 Cauchy–Riemann 방정식이고, 그 결과 도함수가 $0$ 이 아닌 점에서 정칙함수는 각을 보존하는 등각사상이 된다.

Cauchy 적분 정리의 직관은 "정칙함수는 국소적으로 원시함수를 갖는다"다. 삼각형을 점점 작게 쪼개면 각 조각에서 함수는 일차식에 가까워지고, 일차식의 닫힌 경로 적분은 $0$ 이다. 오차를 모아도 여전히 $0$ 이 된다(Goursat의 논법).

Cauchy 적분 공식은 원 위의 값만으로 내부 값을 전부 결정한다. 정칙함수는 경계 데이터에 구속되고, 같은 구속이 실수 쪽에서는 [조화함수](harmonic-functions.md)의 평균값 성질로 나타난다.

# 정의

복소평면의 열린집합 $U$ 에서 정의된 함수 $f$ 가 점 $z$ 에서 복소 미분가능하다는 것은 다음 극한이 존재한다는 뜻이다( $h$ 는 $0$ 으로 가는 복소수).

$$
f'(z)=\lim_{h\to 0}\frac{f(z+h)-f(z)}{h}
$$

$f$ 가 $U$ 의 모든 점에서 복소 미분가능하면 $U$ 에서 정칙(holomorphic)이라 한다. $f$ 를 실부와 허부로 쪼개어 $f=u+iv$ , $z=x+iy$ 로 쓰면, $u$ 와 $v$ 가 실미분가능하다는 전제 아래 복소 미분가능성은 Cauchy–Riemann 방정식과 동치다.

$$
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\qquad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
$$

곡선 $\gamma$ 가 구간 $[a,b]$ 에서 $U$ 로 가는 조각적 매끄러운 경로일 때 경로 적분은 실 [Riemann 적분](riemann-integral.md)으로 정의된다.

$$
\int_{\gamma}f(z)\thinspace dz=\int_a^b f\bigl(\gamma(t)\bigr)\gamma'(t)\thinspace dt
$$

$U$ 가 단순연결(simply connected)이라는 것은 $U$ 안의 모든 닫힌 곡선을 $U$ 안에서 한 점으로 연속적으로 줄일 수 있다는 뜻이다.

고립 특이점 $z_0$ 에서 Laurent 급수의 $-1$ 차 계수를 유수(residue)라 하며, 충분히 작은 반지름의 원 적분으로 표현된다.

$$
\mathrm{Res}\_{z=z_0}f=\frac{1}{2\pi i}\oint_{\lvert z-z_0\rvert=\rho}f(z)\thinspace dz
$$

# 성질

## Cauchy–Goursat 정리

$f$ 가 열린집합 $U$ 에서 정칙이고 $U$ 가 단순연결이면, $U$ 안의 임의의 닫힌 경로 $\gamma$ 에 대해 적분이 $0$ 이다[^1].

$$
\oint_{\gamma}f(z)\thinspace dz=0
$$

Goursat의 기여는 $f$ 의 도함수의 연속성을 따로 가정하지 않아도 된다는 점이다[^1].

증명은 삼각형 경로에서 시작한다. 삼각형을 변의 중점으로 네 개의 닮은 삼각형으로 쪼개면 적분값의 절댓값이 가장 큰 조각을 고를 수 있고, 이를 반복하면 한 점으로 수렴하는 삼각형 열을 얻는다. 그 점에서의 미분가능성으로 $f$ 를 일차식 더하기 오차로 쓰면, 일차식의 닫힌 경로 적분은 $0$ 이고 오차 항은 둘레의 제곱에 비례해 사라진다. 볼록 영역이나 별모양 영역에서는 이로부터 원시함수를 구성하고, 단순연결 영역으로는 경로의 호모토피 불변성으로 확장한다.

단순연결성은 빠뜨릴 수 없다. $U$ 를 원점을 뺀 평면으로 두면 $1/z$ 은 정칙이지만 단위원 적분은 $2\pi i$ 다.

## Cauchy 적분 공식

$f$ 가 $U$ 에서 정칙, 폐원판이 $U$ 에 포함되고 $\gamma$ 가 그 경계원을 양의 방향으로 한 번 도는 경로이면, 원판 내부의 모든 $z$ 에서 다음이 성립한다[^2].

$$
f(z)=\frac{1}{2\pi i}\oint_{\gamma}\frac{f(w)}{w-z}\thinspace dw
$$

고계 도함수에 대해서도 같은 꼴이 성립한다.

$$
f^{(n)}(z)=\frac{n!}{2\pi i}\oint_{\gamma}\frac{f(w)}{(w-z)^{n+1}}\thinspace dw
$$

따라서 정칙함수는 무한 번 미분가능하고 각 점의 근방에서 수렴하는 멱급수로 전개된다(해석적). 역은 Morera 정리다. 연속함수의 모든 삼각형 경로 적분이 $0$ 이면 그 함수는 정칙이다.

## Cauchy 추정과 Liouville 정리

중심 $z_0$ , 반지름 $R$ 의 원 위에서 $f$ 의 절댓값이 $M$ 이하이면 적분 공식에서 즉시 다음을 얻는다.

$$
\bigl\lvert f^{(n)}(z_0)\bigr\rvert\le \frac{n!\thinspace M}{R^n}
$$

$f$ 가 평면 전체에서 정칙인 **전해석함수**이고 절댓값이 상수 $M$ 으로 유계이면, 임의의 $R$ 에 대해 위 추정이 성립하므로 $R$ 을 무한히 크게 보내 도함수가 $0$ 임을 얻는다. 모든 점에서 도함수가 $0$ 이므로 $f$ 는 상수다. 이 진술이 Liouville 정리다.

## 대수학의 기본정리

$n$ 차( $n\ge 1$ ) 복소계수 다항식 $p$ 는 복소 영점을 갖는다. 증명은 귀류법이다. $p$ 에 영점이 없다면 $1/p$ 는 전해석함수다. 절댓값이 큰 영역에서는 $p$ 의 최고차항이 지배하므로 $1/p$ 가 $0$ 에 수렴하고, 남은 폐원판은 [콤팩트](compactness.md)이므로 그 위에서 연속함수 $1/p$ 는 유계다. 따라서 $1/p$ 는 평면 전체에서 유계인 전해석함수이므로 Liouville 정리에 의해 상수이고, $n\ge 1$ 과 모순이다.

영점을 하나 찾아 인수분해하고 귀납적으로 반복하면 중복도를 세어 정확히 $n$ 개의 근을 얻는다.

## 그 밖의 결과

- 최대 절댓값 원리: 상수가 아닌 정칙함수의 절댓값은 영역 내부에서 국소 최대가 될 수 없다. 따라서 유계 영역의 폐포에서 최댓값은 경계에서 달성된다.
- 영점의 고립성과 항등정리: 연결 영역에서 정칙인 함수가 집적점을 가진 집합 위에서 $0$ 이면 영역 전체에서 $0$ 이다. 실해석에서는 성립하지 않는 강한 성질이다.
- 유수 정리: $f$ 가 닫힌 경로와 그 내부에서 유한히 많은 고립 특이점만 갖고 경로 위에서 정칙이면 적분은 내부 특이점 유수의 합으로 계산된다.

$$
\oint_{\gamma}f(z)\thinspace dz=2\pi i\sum_{k}\mathrm{Res}\_{z=z_k}f
$$

# 활용

## 실적분 계산

유수 정리는 실적분을 대수 계산으로 바꾼다. 반지름 $R$ 의 반원 경로(실축 구간과 상반평면 호)를 쓰면 다음을 얻는다.

$$
\int_{-\infty}^{\infty}\frac{dx}{1+x^2}=2\pi i\mathrm{Res}\_{z=i}\frac{1}{1+z^2}=2\pi i\cdot\frac{1}{2i}=\pi
$$

호 위의 적분은 피적분함수가 $R^{-2}$ 규모, 호의 길이가 $R$ 규모이므로 $0$ 으로 간다. 같은 기법으로 삼각함수를 포함한 적분, Fresnel 적분, 급수 합 공식을 얻는다. 이산판인 [이산 Fourier 변환](fourier.md)과 z-변환도 단위원 위의 유수 계산과 직접 연결된다.

## 다른 분야와의 연결

- 조화함수: 정칙함수의 실부와 허부는 Laplace 방정식을 만족한다. 평면 퍼텐셜 문제, 2차원 유체 흐름, 정전기장 계산에 등각사상을 쓴다.
- 해석적 수론: Riemann zeta 함수의 [해석적 연속](analytic-continuation.md)과 영점 분포가 소수 분포를 통제한다([소수](primes.md)).
- 특수함수의 정의역 확장: 해석적 연속은 국소 데이터가 전역 함수를 결정한다는 항등정리의 응용이다.
- 편각 원리: 경로를 따라가며 함수값이 원점을 감는 횟수가 내부 영점과 극의 개수 차이를 센다. 제어이론의 Nyquist 판정법이 이 정리의 응용이다.

[^1]: Cauchy's integral theorem, Wikipedia (단순연결 영역에서의 진술과 Goursat의 약화된 가정). https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem
[^2]: T. Tao, Math 246A Notes 3: Cauchy's theorem and its consequences. https://terrytao.wordpress.com/2016/10/02/math-246a-notes-3-cauchys-theorem-and-its-consequences/

# 연관 문서

## 선수지식

- [미분](derivative.md)
- [미적분학의 기본 정리](fundamental-calculus.md)
- [복소해석 개관](complex-analysis-overview.md)

## 더 알아보기

### 복소해석의 주요 정리

- [유수 정리](residue-theorem.md)
- [해석적 연속](analytic-continuation.md)
- [조화함수](harmonic-functions.md)
- [등각사상](conformal-mapping.md)
- [Weierstrass 인수분해 정리](weierstrass-factorization.md)

### 다른 분야에서의 쓰임

- [모듈러 형식](modular-forms.md)
- [Riemann–Roch 정리](riemann-roch.md)
- [Kähler 다양체와 Hodge 분해](kahler-manifolds.md)

#complex_analysis #analysis #number_theory
