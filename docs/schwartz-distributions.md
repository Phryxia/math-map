# Schwartz 분포

# 개요

Schwartz 분포는 매끄러운 시험함수에 수를 대응시키는 연속 선형범함수다. 국소적분가능 함수는 적분으로 분포를 주고, Dirac 델타처럼 함수로 쓸 수 없는 대상도 분포가 된다.

[Sobolev 공간](sobolev-spaces.md)의 약한 도함수는 결과가 다시 함수일 때만 정의되지만, 분포에서는 미분이 항상 정의되고 횟수에 제한이 없다. 대신 두 분포의 곱이 정의되지 않는다.

# 직관

Sobolev 공간에서 $\vert x\vert$ 의 도함수를 함수 $g$ 로 얻었다. $g(x)$ 는 $x\gt 0$ 에서 $1$ , $x\lt 0$ 에서 $-1$ 이다. $g$ 를 같은 방식으로 한 번 더 미분한다.

$(-1,1)$ 의 양 끝에서 $0$ 인 매끄러운 $\varphi$ 에 대해 직접 계산하면

$$
\int\_{-1}^{1}g\varphi'\thinspace dx=-\int\_{-1}^{0}\varphi'\thinspace dx+\int\_0^{1}\varphi'\thinspace dx=-2\varphi(0)
$$

이다. 약한 도함수의 정의는 이 값이 $-\int\_{-1}^{1}v\varphi\thinspace dx$ 와 같은 $v$ 를 찾는 것이므로, 모든 $\varphi$ 에서 $\int\_{-1}^{1}v\varphi\thinspace dx=2\varphi(0)$ 이어야 한다.

그런 $v$ 는 국소적분가능 함수 가운데 없다. $0$ 을 포함하지 않는 구간에서만 $0$ 이 아닌 $\varphi$ 를 넣으면 오른쪽이 $0$ 이므로 $v$ 가 $0$ 밖에서 거의 어디서나 $0$ 이고, 따라서 $v$ 가 거의 어디서나 $0$ 이다. 그러면 왼쪽이 항상 $0$ 인데 오른쪽은 $\varphi(0)\ne 0$ 에서 $0$ 이 아니다.

그래서 도함수를 함수로 두는 것을 그만둔다. $\varphi\mapsto 2\varphi(0)$ 이라는 대응 자체를 $g$ 의 도함수라 부른다. 이렇게 두면 미분을 $\varphi$ 쪽으로 넘기는 것만으로 정의가 끝나므로, 횟수에 제한 없이 미분할 수 있다.

# 정의

## 시험함수와 분포

열린집합 $U\subset\mathbb R^n$ 에 대해 $C_c^\infty(U)$ 를 $U$ 안의 어떤 콤팩트 집합 밖에서 $0$ 인 매끄러운 함수 전체라 하고, 그 원소를 **시험함수**라 한다.

선형범함수 $T:C_c^\infty(U)\to\mathbb R$ 가 **분포**라는 것은, 모든 콤팩트 $K\subset U$ 에 대해 상수 $C$ 와 정수 $m$ 이 있어 $K$ 안에서만 $0$ 이 아닌 모든 $\varphi$ 에서

$$
\vert T(\varphi)\vert\le C\sum\_{\vert\alpha\vert\le m}\sup\_{x\in K}\vert\partial^\alpha\varphi(x)\vert
$$

이 성립한다는 뜻이다. 분포 전체를 $\mathcal D'(U)$ 로 쓴다. 이 조건이 시험함수 공간의 위상에 대한 연속성이다.

## 함수가 주는 분포

$u$ 가 $U$ 에서 국소적분가능하면

$$
T_u(\varphi)=\int\_U u\varphi\thinspace dx
$$

가 분포다. $m=0$ 과 $C=\int_K\vert u\vert\thinspace dx$ 로 위 조건을 만족한다. $T_u=T_w$ 인 것과 $u=w$ 가 거의 어디서나 성립하는 것이 같으므로, 국소적분가능 함수를 분포의 일부로 본다.

## 분포의 도함수

분포 $T$ 와 다중지표 $\alpha$ 에 대해

$$
(\partial^\alpha T)(\varphi)=(-1)^{\vert\alpha\vert}T(\partial^\alpha\varphi)
$$

로 정의한다. 오른쪽이 분포의 조건을 만족하므로 $\partial^\alpha T$ 가 다시 분포다.

## Dirac 델타

점 $a\in U$ 에 대해 $\delta_a(\varphi)=\varphi(a)$ 로 두면 분포다. $m=0$ , $C=1$ 로 조건을 만족한다.

Heaviside 함수를 $x\ge 0$ 에서 $1$ , $x\lt 0$ 에서 $0$ 이라 하면 그 분포 도함수가 $\delta_0$ 이다. 직관 절의 $g$ 는 이 함수의 두 배에서 상수를 뺀 것이므로 도함수가 $2\delta_0$ 다.

# 성질

## 미분과 극한의 교환

분포열 $T_j$ 가 모든 $\varphi$ 에서 $T_j(\varphi)\to T(\varphi)$ 이면 $T_j\to T$ 라 한다.

**정리.** $T_j\to T$ 이면 모든 $\alpha$ 에서 $\partial^\alpha T_j\to\partial^\alpha T$ 다.

증명의 요지. 정의식의 오른쪽이 $T_j(\partial^\alpha\varphi)$ 이고 $\partial^\alpha\varphi$ 도 시험함수이므로, 수렴의 정의를 그 함수에 적용하면 된다. 함수의 수렴에서는 도함수의 수렴이 따라오지 않으므로, 이 교환은 분포로 옮긴 데서 나온다.[^1]

## 곱셈의 제약

매끄러운 함수 $f$ 와 분포 $T$ 의 곱은 $(fT)(\varphi)=T(f\varphi)$ 로 정의된다. $f\varphi$ 가 시험함수이기 때문이다.

두 분포의 곱은 정의되지 않는다. $\delta_0$ 와 자신의 곱을 함수의 경우처럼 근사로 정의하려 하면, $\delta_0$ 에 수렴하는 두 함수열의 선택에 따라 값이 달라진다. Leibniz 규칙과 결합법칙을 함께 유지하는 곱이 없다는 것이 Schwartz 의 불가능성 결과다.[^2]

## 완만 분포와 Fourier 변환

$\mathbb R^n$ 의 매끄러운 함수 $\varphi$ 가 **급감소**라는 것은 모든 $\alpha$ 와 모든 정수 $N$ 에서 $\vert x\vert^N\vert\partial^\alpha\varphi(x)\vert$ 가 유계라는 뜻이다. 급감소 함수 전체를 $\mathcal S$ , 그 위의 연속 선형범함수를 **완만 분포**라 하고 $\mathcal S'$ 로 쓴다.

**정리.** Fourier 변환이 $\mathcal S$ 의 선형 동형이고, $\widehat T(\varphi)=T(\widehat\varphi)$ 로 $\mathcal S'$ 로 확장된다.

증명의 요지. $\mathcal S$ 에서는 Fourier 변환이 미분을 곱셈으로 바꾸므로 급감소성이 보존되고, 반전 공식이 역을 준다. 쌍대로 옮긴 정의는 $\mathcal S$ 에서 Parseval 항등식과 일치하므로 함수에 대한 변환의 확장이다. $\delta_0$ 의 변환이 상수함수 $1$ 이고, 상수함수 $1$ 의 변환이 $\delta_0$ 의 상수배다.[^1]

## Sobolev 공간과의 관계

$W^{k,p}(U)$ 는 분포 가운데 $\vert\alpha\vert\le k$ 에서 $\partial^\alpha T$ 가 $L^p(U)$ 의 함수로 주어지는 것 전체다. 약한 도함수가 존재한다는 조건이 분포 도함수가 함수라는 조건과 같다.

$H^{-k}(U)$ 를 $H_0^k(U)$ 의 쌍대로 정의하면 그 원소가 분포이고, 음의 차수가 미분 횟수를 센다. $\delta_0$ 은 $n=1$ 에서 $H^{-s}$ 에 $s\gt 1/2$ 일 때 든다.

# 활용

- **기본해.** $-\Delta E=\delta_0$ 를 만족하는 분포 $E$ 를 찾으면 $-\Delta u=f$ 의 해가 $E$ 와 $f$ 의 합성곱으로 주어진다. [Dirichlet 문제](dirichlet-problem.md)의 고전적 해법에 나오는 핵이 이 $E$ 다.
- **Fourier 변환의 확장.** $e^{iax}$ 와 다항식은 적분가능하지도 제곱적분가능하지도 않지만 완만 분포이므로 변환이 정의된다. [Poisson 합 공식](poisson-summation.md)을 격자 위의 델타 분포의 변환으로 쓰면 양변이 한 등식이 된다.
- **측도와 분포.** 유한 Borel [측도](measure.md) $\mu$ 는 $\varphi\mapsto\int\varphi\thinspace d\mu$ 로 분포를 주고, 위 조건을 $m=0$ 으로 만족한다. $m=0$ 으로 만족하는 분포가 국소 유한 측도의 차로 표현된다.
- **약한 해의 정식화.** 편미분방정식의 양변을 분포로 읽으면 미분가능성을 가정하지 않고 등식을 쓸 수 있다. 해가 실제로 매끄러운지는 정칙성 정리가 따로 답한다.

[^1]: Lars Hörmander, *The Analysis of Linear Partial Differential Operators I*, 2판, Springer, 1990, 2 장과 7 장. 분포의 정의, 미분, 완만 분포의 Fourier 변환이 여기 있다.

[^2]: L. Schwartz, *Sur l'impossibilité de la multiplication des distributions*, C. R. Acad. Sci. Paris **239** (1954), 847–848.

# 연관 문서

## 선수지식

- [쌍대 공간](dual-space.md)
- [Sobolev 공간](sobolev-spaces.md)
- [Fourier 변환](fourier-transform.md)

## 더 알아보기

- [Green 함수](greens-function.md)
- [타원형 정칙성](elliptic-regularity.md)

#functional_analysis #analysis #measure_theory
