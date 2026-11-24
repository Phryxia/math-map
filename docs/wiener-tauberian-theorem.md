# Wiener Tauber 정리

# 개요

**Wiener Tauber 정리(Wiener's Tauberian theorem)** 는 함수 $f$ 를 평행이동한 것들의 일차결합으로 모든 적분 가능한 함수를 근사할 수 있는 것과, $f$ 의 [Fourier 변환](fourier-transform.md)이 어디서도 $0$ 이 아닌 것이 동치라는 정리다. 길이 $1$ 인 창으로 평균을 내면 $\cos 2\pi x$ 의 평균은 어디서나 $0$ 이어서, 평균만 보아서는 원래 함수가 진동하는지 알 수 없다. 이 정리는 평균을 내는 창 $K$ 의 Fourier 변환이 $0$ 이 되는 진동수가 없으면, $K$ 로 낸 평균의 수렴에서 다른 모든 창으로 낸 평균의 수렴이 따라 나온다고 답한다.

# 직관

유계 함수 $\varphi$ 가 $x\to\infty$ 에서 어떻게 움직이는지 알고 싶은데, 아는 것은 창 $K$ 로 낸 평균 $(K\ast\varphi)(x)=\int K(t)\thinspace\varphi(x-t)\thinspace dt$ 뿐이다. $K$ 를 $\lbrack 0,1\rbrack$ 의 지시함수로 두면 이 평균은 $x-1$ 부터 $x$ 까지 $\varphi$ 의 평균이다.

$\varphi(x)=\cos 2\pi x$ 이면 길이 $1$ 인 구간이 정확히 한 주기이므로 평균은 모든 $x$ 에서 $0$ 이다. 그러면 평균은 $0$ 으로 수렴한다. 같은 $\varphi$ 를 창 $g(t)=e^{-\vert t\vert}$ 로 평균하면 다음이 나온다.

$$
(g\ast\varphi)(x)=\frac{2}{1+4\pi^2}\cos 2\pi x
$$

이 값은 수렴하지 않는다. 첫 창은 진동수 $2\pi$ 의 진동을 지워서 보지 못했고, 둘째 창은 그 진동을 줄여서 남긴다.

Fourier 변환으로 보면 첫 창은 $\hat K(\xi)=(1-e^{-i\xi})/(i\xi)$ 이고 $\xi=2\pi k$ ($k\ne 0$) 에서 $0$ 이다. 둘째 창은 $\hat g(\xi)=2/(1+\xi^2)$ 이고 어디서도 $0$ 이 아니다. $\hat K$ 가 $0$ 인 진동수의 진동은 $K$ 로 낸 평균에서 사라진다. 그런 진동수가 없는 창이면 평균 하나가 모든 평균을 정한다는 것이 이 정리다.

# 정의

$f\in L^1(\mathbb R)$ 과 실수 $a$ 에 대해 $f_a(x)=f(x-a)$ 를 $f$ 의 평행이동이라 한다. 평행이동들의 유한 일차결합 전체의 $L^1$ 노름에 대한 닫힘을 $f$ 가 생성하는 **평행이동 불변 부분공간(translation-invariant subspace)** 이라 한다.

Wiener Tauber 정리는 다음 두 진술이다.[^1]

첫째 진술. $f\in L^1(\mathbb R)$ 이 생성하는 평행이동 불변 부분공간이 $L^1(\mathbb R)$ 전체인 것은 모든 $\xi$ 에서 $\hat f(\xi)\ne 0$ 인 것과 동치다.

둘째 진술. $K\in L^1(\mathbb R)$ 이 모든 $\xi$ 에서 $\hat K(\xi)\ne 0$ 을 만족하고 $\varphi\in L^\infty(\mathbb R)$ 이 다음을 만족한다고 하자.

$$
\lim_{x\to\infty}(K\ast\varphi)(x)=A\int K
$$

그러면 모든 $g\in L^1(\mathbb R)$ 에서 $(g\ast\varphi)(x)\to A\int g$ 이다.

직관 절의 $\lbrack 0,1\rbrack$ 의 지시함수는 $\hat K$ 가 $0$ 이 되는 점이 있어 둘째 진술의 가정을 만족하지 않고, 실제로 결론이 $g(t)=e^{-\vert t\vert}$ 에서 성립하지 않았다. $e^{-\vert t\vert}$ 는 가정을 만족한다.

# 성질

## 둘째 진술의 유도

첫째 진술에서 둘째 진술이 나온다. $\vert(g\ast\varphi)(x)\vert\le\Vert g\Vert\_1\Vert\varphi\Vert\_\infty$ 이므로 $(g\ast\varphi)(x)\to A\int g$ 를 만족하는 $g$ 전체는 닫힌 부분공간이고, 평행이동에 대해 닫혀 있다. 이 부분공간이 $K$ 를 포함하므로 $L^1$ 전체다.

## 영점이 있는 경우

$\hat f(\xi_0)=0$ 이면 $\varphi(x)=e^{i\xi_0x}$ 와 $f$ 의 모든 평행이동의 합성곱이 $0$ 이다. $\varphi$ 와의 합성곱은 $L^1$ 위의 연속 선형 사상이므로 평행이동들의 닫힌 일차결합도 모두 $\varphi$ 와의 합성곱이 $0$ 이고, 합성곱이 $0$ 이 아닌 $L^1$ 함수가 있으므로 평행이동들은 조밀하지 않다. 직관 절의 $\cos 2\pi x$ 가 이 $\varphi$ 의 실수부다.

## 충분 조건의 증명

$\hat f$ 가 $0$ 이 되지 않는다고 하자. $\hat g$ 가 콤팩트 받침을 갖는 $g$ 전체는 $L^1$ 에서 조밀하므로, 그런 $g$ 가 평행이동 불변 부분공간에 든다는 것을 보이면 된다. $\hat g$ 의 받침 위에서 $1/\hat f$ 를 어떤 $h\in L^1$ 의 Fourier 변환으로 국소적으로 맞출 수 있다. 이것이 [Banach 대수](banach-algebras.md)의 Wiener 정리(Wiener's lemma)를 실직선에 옮긴 국소 판본이다. 그러면 $\hat g=\hat h\thinspace\hat f$ 이므로 $g=h\ast f$ 이고, 이것은 $f$ 의 평행이동의 일차결합의 극한이다.

Gelfand 의 이론으로 쓰면 $L^1(\mathbb R)$ 은 합성곱으로 가환 Banach 대수이고 그 지표는 $f\mapsto\hat f(\xi)$ 뿐이다. 평행이동 불변 닫힌 부분공간은 닫힌 아이디얼이고, $\hat f$ 가 $0$ 이 되지 않는다는 것은 $f$ 를 포함하는 아이디얼이 어느 지표의 핵에도 들지 않는다는 뜻이다.[^2]

## 이산 판본

$\ell^1(\mathbb Z)$ 에서도 같다. 수열 $a$ 의 평행이동들이 $\ell^1(\mathbb Z)$ 에서 조밀한 것은 [Fourier 급수](fourier-series.md) $\sum a_ne^{in\theta}$ 가 단위원 위에서 $0$ 이 되지 않는 것과 동치다. 이것은 Banach 대수 문서의 Wiener 정리, 곧 그런 급수의 역수도 계수가 절대수렴한다는 것에서 바로 나온다.

## L² 판본과 스펙트럼 합성

$L^2(\mathbb R)$ 에서는 $f$ 의 평행이동이 조밀한 것이 $\hat f(\xi)\ne 0$ 이 거의 모든 $\xi$ 에서 성립하는 것과 동치다. Plancherel 정리(Plancherel theorem)로 Fourier 변환을 하면 평행이동은 $\hat f$ 에 $e^{-ia\xi}$ 를 곱하는 작용이 되고, 이 곱들의 일차결합은 $\hat f$ 가 $0$ 인 집합 밖의 함수만 근사한다.

$L^1$ 에서 "Fourier 변환의 영점 집합이 같으면 같은 닫힌 아이디얼을 생성하는가" 를 스펙트럼 합성(spectral synthesis) 문제라 한다. Wiener Tauber 정리는 영점 집합이 공집합인 경우다. Malliavin 은 $L^1(\mathbb R^n)$ 에서 이 물음이 일반적으로 부정적임을 보였다.[^3]

# 활용

- [소수 정리](prime-number-theorem.md). Wiener 는 $\psi(e^u)e^{-u}$ 에 이 정리를 적용해, $\zeta(1+it)\ne 0$ 을 핵의 Fourier 변환이 $0$ 이 아니라는 가정으로 바꾸어 소수 정리를 증명했다.[^1] [Riemann zeta 함수](riemann-zeta.md)의 직선 위 비소멸이 정확히 이 정리의 가정이다.
- [Tauber 정리](tauberian-theorems.md). Hardy–Littlewood 정리처럼 Abel 평균에서 Cesàro 평균이나 급수의 수렴을 얻는 정리들이, 핵을 하나 정하고 그 Fourier 변환이 $0$ 이 되지 않음을 확인하는 일로 바뀐다.
- [Banach 대수](banach-algebras.md). Gelfand 가 가환 Banach 대수의 이론을 만들 때 이 정리의 짧은 증명이 첫 응용이었다.[^2]

[^1]: N. Wiener, "Tauberian theorems", *Annals of Mathematics* 33, 1932, pp. 1–100.
[^2]: I. Gelfand, "Normierte Ringe", *Matematicheskii Sbornik* 9, 1941, pp. 3–24.
[^3]: P. Malliavin, "Impossibilité de la synthèse spectrale sur les groupes abéliens non compacts", *Publications Mathématiques de l'IHÉS* 2, 1959, pp. 61–68.

# 연관 문서

## 선수지식

- [Banach 대수](banach-algebras.md)
- [Tauber 정리](tauberian-theorems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis #number_theory
