# Weyl–Titchmarsh m 함수

# 개요

Weyl–Titchmarsh m 함수는 극한점인 끝점을 가진 Sturm–Liouville 작용소에 붙는 해석함수다. 극한점 끝점에서 제곱적분가능한 해가 상수배까지 하나이므로, 그 해를 반대쪽 끝점에서 정규화하면 미분계수 하나가 복소 매개변수의 함수로 남는다.

이 함수는 상반평면을 상반평면으로 보내고, 실축 위 경계값의 허수부가 작용소의 스펙트럼 측도를 준다. 고윳값이 이산이 아닌 문제에서 고유함수 급수를 대신하는 적분 전개가 이 측도로 적힌다.

# 직관

정규 Sturm–Liouville 문제에서는 고윳값이 이산 열을 이루고 고유함수가 $L^2$ 의 기저였다. 반직선에서는 그 기저가 없다.

$$
-u''=\lambda u,\qquad u(0)=0,\qquad 0\le x\lt \infty
$$

$\lambda=k^2\gt 0$ 이면 이 조건을 만족하는 해가 $\sin kx$ 이고 $\int_0^\infty\sin^2kx\thinspace dx$ 가 발산한다. $\lambda\le 0$ 이면 $u(0)=0$ 인 해가 $\sinh$ 꼴이거나 $0$ 이다. 어느 실수 $\lambda$ 에서도 제곱적분가능한 해가 없으므로 고윳값이 하나도 없고, 전개할 기저가 나오지 않는다.

$\lambda$ 를 실축 밖으로 옮긴다. $z$ 의 허수부가 양수일 때 $\sqrt z$ 를 허수부가 양수인 쪽으로 잡으면 $e^{i\sqrt z\thinspace x}$ 가 지수적으로 감쇠해 제곱적분가능하고 $e^{-i\sqrt z\thinspace x}$ 는 발산한다. 무한원점이 [극한점](limit-point-limit-circle.md)이므로 제곱적분가능한 해가 상수배까지 하나다. 그 해를 $\psi(0)=1$ 로 정규화하면 $\psi'(0)=i\sqrt z$ 라는 수 하나가 남는다.

이 수를 $m(z)$ 라 쓴다. $z\mapsto i\sqrt z$ 는 상반평면에서 해석적이고 값의 허수부가 양수다. $z=\lambda+i\varepsilon$ 에서 $\varepsilon$ 을 $0$ 으로 내리면 $\lambda\gt 0$ 에서 $\mathrm{Im}\thinspace m=\sqrt\lambda$ 이고 $\lambda\lt 0$ 에서 $\mathrm{Im}\thinspace m=0$ 이다. 실수 $\lambda$ 에서 고윳값을 찾는 대신 이 양을 $\lambda$ 에 대한 밀도로 쓰면 전개의 가중이 나온다.

# 정의

## m 함수

반직선 $\lbrack 0,\infty)$ 에서 방정식

$$
-u''+qu=zu
$$

를 보고, $q$ 가 국소적으로 적분가능하며 $0$ 이 정규 끝점이고 $\infty$ 가 극한점이라 하자. 초기조건

$$
\theta(0)=1,\thinspace\theta'(0)=0,\qquad \phi(0)=0,\thinspace\phi'(0)=1
$$

을 갖는 두 해를 $\theta(x,z)$ 와 $\phi(x,z)$ 라 한다. $z\notin\mathbb R$ 에 대해

$$
\psi(x,z)=\theta(x,z)+m(z)\thinspace\phi(x,z)\in L^2(0,\infty)
$$

을 만족하는 복소수 $m(z)$ 가 유일하게 있다. 이 $m$ 을 **Weyl–Titchmarsh m 함수**라 한다. $\psi(0,z)=1$ 과 $\psi'(0,z)=m(z)$ 이므로 $m(z)$ 는 제곱적분가능한 해의 원점에서의 로그 미분이다.

유일성은 극한점 가정에서 따라온다. 제곱적분가능한 해의 공간이 1 차원이고 $\phi$ 가 그 공간에 들지 않으므로, 그 공간의 해를 $\theta$ 성분의 계수가 $1$ 이 되도록 정규화하는 방법이 하나다.

## Herglotz 함수

상반평면에서 [정칙](holomorphic-functions.md)이고 값의 허수부가 양수인 함수를 **Herglotz 함수**라 한다.

# 성질

## Herglotz 성질

**정리.** $m$ 은 상반평면에서 정칙이고 다음을 만족한다.

$$
\mathrm{Im}\thinspace m(z)=\mathrm{Im}\thinspace z\int_0^\infty\lvert\psi(x,z)\rvert^2\thinspace dx
$$

특히 $\mathrm{Im}\thinspace m(z)\gt 0$ 이므로 $m$ 은 Herglotz 함수다.

증명의 요지. $-\psi''+q\psi=z\psi$ 와 그 켤레 $-\overline\psi''+q\overline\psi=\bar z\overline\psi$ 에 각각 $\overline\psi$ 와 $\psi$ 를 곱해 빼면

$$
\frac{d}{dx}\bigl(\psi\overline\psi'-\psi'\overline\psi\bigr)=(z-\bar z)\lvert\psi\rvert^2
$$

이다. $0$ 에서 $\infty$ 까지 적분한다. 원점의 경계항은 $\overline{m}-m=-2i\thinspace\mathrm{Im}\thinspace m$ 이고, $\psi$ 와 $\psi'$ 가 무한원점에서 $0$ 으로 가므로 그쪽 경계항은 사라진다. 양변을 $2i$ 로 나누면 위 항등식이다. ∎

정칙성은 $\theta$ 와 $\phi$ 가 $z$ 에 대해 정칙이고, 유한 구간에서 경계조건을 돌려 얻은 근사 $m$ 들이 $z$ 에 대해 정칙이며 극한점 끝점에서 국소 균등수렴하는 것에서 따라온다.

## 스펙트럼 측도

**정리(Herglotz 표현).** Herglotz 함수 $m$ 은 실수 $c$ 와 $\mathbb R$ 위의 증가함수 $\rho$ 로

$$
m(z)=c+\int_{\mathbb R}\Bigl(\frac{1}{\lambda-z}-\frac{\lambda}{1+\lambda^2}\Bigr)\thinspace d\rho(\lambda)
$$

꼴로 적히고, $\rho$ 는 상수를 더하는 것까지 유일하다.[^1] $\rho$ 는 Stieltjes 역변환

$$
d\rho=\frac1\pi\lim_{\varepsilon\to 0^+}\mathrm{Im}\thinspace m(\lambda+i\varepsilon)\thinspace d\lambda
$$

로 복원된다.

이 $\rho$ 가 경계조건 $u(0)=0$ 으로 정해진 자기수반 작용소의 **스펙트럼 측도**다.

## 고유함수 전개

**정리.** 다음 두 사상이 $L^2(0,\infty)$ 와 $L^2(\mathbb R,d\rho)$ 사이의 유니터리 변환이다.[^2]

$$
\hat f(\lambda)=\int_0^\infty f(x)\thinspace\phi(x,\lambda)\thinspace dx,\qquad f(x)=\int_{\mathbb R}\hat f(\lambda)\thinspace\phi(x,\lambda)\thinspace d\rho(\lambda)
$$

정규 문제의 고유함수 급수가 이 적분으로 대치된다. $\rho$ 가 점프를 갖는 점이 고윳값이고 그 점프의 크기가 고유함수의 정규화 상수를 준다.

# 활용

- **자유 반직선.** $q=0$ 이고 $u(0)=0$ 이면 $m(z)=i\sqrt z$ 이고 $d\rho=\pi^{-1}\sqrt\lambda\thinspace d\lambda$ 가 $\lambda\gt 0$ 에 실려 있다. 이 전개가 Fourier 사인 변환이다.
- **스펙트럼의 분류.** $\mathrm{Im}\thinspace m(\lambda+i0)$ 이 양수인 점들이 절대연속 스펙트럼을 이루고, $m$ 이 극을 갖는 점이 고윳값이다. 경계값이 존재하지 않는 점들의 집합이 특이연속 스펙트럼을 담는다.
- **역스펙트럼 문제.** Borg–Marchenko 정리가 $m$ 함수 하나로 $q$ 가 결정된다고 말한다.[^3] 두 퍼텐셜의 $m$ 함수가 상반평면의 한 방향에서 같은 점근을 가지면 두 퍼텐셜이 같다.
- **산란 이론.** $q$ 가 무한원점에서 빨리 감쇠하면 $m$ 의 실축 위 경계값이 반사계수로 적히고, [역산란 변환](inverse-scattering-transform.md)의 산란 자료가 이 함수에서 읽힌다.

[^1]: H. Weyl, *Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen*, Math. Ann. **68** (1910), 220–269.

[^2]: E. C. Titchmarsh, *Eigenfunction Expansions Associated with Second-Order Differential Equations*, Part I, 2 판, Oxford (1962) 2 장과 3 장이다.

[^3]: F. Gesztesy, B. Simon, *On local Borg–Marchenko uniqueness results*, Comm. Math. Phys. **211** (2000), 273–287.

# 연관 문서

## 선수지식

- [정칙함수](holomorphic-functions.md)
- [극한점·극한원 분류](limit-point-limit-circle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #complex_analysis
