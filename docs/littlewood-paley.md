# Littlewood–Paley 이론

# 개요

Plancherel 정리는 주파수를 겹치지 않는 조각으로 가른 함수의 $L^2$ 노름 제곱이 조각들의 노름 제곱의 합과 같다고 한다. $L^p$ 노름에는 같은 등식이 없다.

Littlewood–Paley 이론은 주파수를 이진 띠로 가른 조각들을 제곱해 더한 함수를 두고, 그 함수의 $L^p$ 노름이 원래 노름과 동등하다는 정리다. $L^2$ 에서 직교성이 맡던 자리를 $1\lt p\lt\infty$ 에서 이 동등성이 맡는다.

# 직관

$f$ 의 주파수를 $2^j\le\vert\xi\vert\lt 2^{j+1}$ 인 띠로 갈라 조각 $\Delta_jf$ 를 얻는다. $L^2$ 노름은 조각들로 계산된다.

$$
\Vert f\Vert\_{L^2}^2=\sum_j\Vert\Delta_jf\Vert\_{L^2}^2
$$

Fourier 변환이 노름을 보존하고 조각들의 주파수 받침이 겹치지 않으므로 교차항의 적분이 $0$ 이다.

$p=4$ 에서 같은 계산을 한다. $\Vert f\Vert\_{L^4}^4$ 는 네 조각의 곱의 적분을 모두 더한 것이다.

$$
\int\Delta_if\thinspace\overline{\Delta_jf}\thinspace\Delta_kf\thinspace\overline{\Delta_lf}\thinspace dx
$$

이 적분이 $0$ 이려면 네 띠에서 고른 주파수의 합 $\xi_i-\xi_j+\xi_k-\xi_l$ 이 $0$ 이 될 수 없어야 한다. 서로 다른 띠에서도 그런 네 주파수를 고를 수 있으므로 교차항이 남고, 제곱합으로 가는 계산이 막힌다.

교차항이 남는 것은 조각들의 부호가 고정되어 있기 때문이다. 조각마다 부호를 $\pm 1$ 로 무작위로 뒤집으면 교차항은 부호가 따라 바뀌어 평균이 $0$ 이 되고, 자기 자신과 짝지은 항만 남아 제곱합이 된다. 부호를 뒤집은 함수의 $L^p$ 노름이 원래 노름과 같은 크기임을 따로 보이면, 제곱합의 제곱근을 재는 것으로 $L^p$ 노름을 얻는다.

# 정의

## 이진 분해

$\varphi$ 가 매끄럽고 받침이 $\tfrac12\le\vert\xi\vert\le 2$ 이며 $\xi\ne 0$ 에서 $\sum\_{j\in\mathbb Z}\varphi(2^{-j}\xi)=1$ 을 만족한다고 하자. $j$ 번째 **이진 조각**은 Fourier 변환 쪽에서 $\varphi(2^{-j}\xi)$ 를 곱해 정의한다.

$$
\widehat{\Delta_jf}(\xi)=\varphi(2^{-j}\xi)\thinspace\hat f(\xi)
$$

$\Delta_j$ 는 받침이 $j$ 번째 띠인 매끄러운 자름이고, $f=\sum_j\Delta_jf$ 가 적절한 뜻에서 성립한다.

## 제곱함수

이진 조각들의 **제곱함수**는 다음과 같다.

$$
Sf(x)=\Bigl(\sum_j\vert\Delta_jf(x)\vert^2\Bigr)^{1/2}
$$

$S$ 는 각 점에서 $\ell^2$ 노름을 취하므로 선형이 아니다.

# 성질

## Littlewood–Paley 부등식

$1\lt p\lt\infty$ 이면 $p$ 에만 의존하는 상수 $c_p$ 와 $C_p$ 가 있어 모든 $f\in L^p(\mathbb R^n)$ 에서 다음이 성립한다[^1].

$$
c_p\thinspace\Vert f\Vert\_{L^p}\le\Vert Sf\Vert\_{L^p}\le C_p\thinspace\Vert f\Vert\_{L^p}
$$

증명의 요지. 부호 $\epsilon=(\epsilon_j)$ 를 $\pm 1$ 에서 골라 $T\_\epsilon f=\sum_j\epsilon_j\Delta_jf$ 라 둔다. $T\_\epsilon$ 의 핵은 $\sum_j\epsilon_j2^{jn}\check\varphi(2^jz)$ 이고, 이 합이 $\epsilon$ 에 무관한 상수로 Calderón–Zygmund 핵의 두 조건을 만족한다. 심볼이 유계이므로 $L^2$ 유계성도 $\epsilon$ 에 무관하다. [Calderón–Zygmund 정리](calderon-zygmund-theory.md)가 $\Vert T\_\epsilon f\Vert\_{L^p}\le C_p\Vert f\Vert\_{L^p}$ 를 $\epsilon$ 에 균등하게 준다. 부호를 무작위로 두고 [Khintchine 부등식](khintchine-inequality.md)을 각 점에 적용하면 $\epsilon$ 에 대한 평균이 $Sf(x)^p$ 와 같은 크기이므로 오른쪽 부등식이 나온다. 왼쪽은 $S$ 가 $L^{p'}$ 에서 유계라는 것과 $\sum_j\Delta_j\tilde\Delta_j=\mathrm{id}$ 꼴의 분해를 쌍대성에 넣어 얻는다.

## Mikhlin 승수 정리

심볼 $m$ 이 $\vert\alpha\vert\le\lfloor n/2\rfloor+1$ 인 모든 다중지표에서 $\vert\partial^\alpha m(\xi)\vert\le C\vert\xi\vert^{-\vert\alpha\vert}$ 를 만족하면, $m$ 을 곱하는 작용소는 $1\lt p\lt\infty$ 에서 $L^p$ 유계다[^2].

증명의 요지. $m$ 을 이진 띠로 잘라 $m_j=m\thinspace\varphi(2^{-j}\thinspace\cdot\thinspace)$ 로 두면 각 $m_j$ 의 역변환이 $j$ 에 무관한 상계를 갖고, 그 합이 Hörmander 조건을 만족하는 핵을 준다. 심볼이 유계이므로 $L^2$ 유계성이 있고 Calderón–Zygmund 정리를 쓴다.

## Sobolev 노름의 띠 표현

$s\in\mathbb R$ 과 $1\lt p\lt\infty$ 에서 Sobolev 노름이 띠마다 무게를 준 제곱함수로 표현된다.

$$
\Vert f\Vert\_{W^{s,p}}\simeq\Bigl\Vert\Bigl(\sum_j2^{2js}\vert\Delta_jf\vert^2\Bigr)^{1/2}\Bigr\Vert\_{L^p}
$$

미분 횟수가 정수여야 한다는 제약이 오른쪽에는 없으므로 이 표현이 분수 차수의 정의가 된다. $\ell^2$ 합을 $\ell^q$ 합으로 바꾸고 순서를 뒤집으면 Besov 노름이다.

# 활용

- **분수 차수 [Sobolev 공간](sobolev-spaces.md).** 띠 표현으로 $s$ 를 실수로 두고, 매입 정리와 보간을 정수 차수와 같은 계산으로 얻는다.
- **곱의 추정.** 두 함수의 곱을 띠 쌍으로 갈라 주파수가 비슷한 쌍과 한쪽이 큰 쌍으로 나누면, 각 묶음의 노름이 한쪽의 Sobolev 노름과 다른 쪽의 상한 노름으로 받쳐진다. 이 분해를 paraproduct 라 하고 준선형 편미분방정식의 선험적 추정에 쓴다.
- **분산 방정식의 추정.** 파동 방정식과 Schrödinger 방정식의 해를 주파수 띠마다 재면 띠 안에서 위상의 속도가 거의 일정하므로 띠별 추정이 나오고, 제곱함수로 다시 모아 $L^p$ 추정을 얻는다.
- **특이적분의 판정.** 작용소가 각 띠에서 유계이고 띠 사이의 상호작용이 빠르게 줄면 전체가 $L^p$ 유계라는 판정을 제곱함수가 준다.

[^1]: J. E. Littlewood, R. E. A. C. Paley, "Theorems on Fourier series and power series (II)", Proceedings of the London Mathematical Society **42** (1937), 52–89. $\mathbb R^n$ 판과 Calderón–Zygmund 이론을 쓰는 증명은 E. M. Stein, *Singular Integrals and Differentiability Properties of Functions*, Princeton University Press (1970), Chapter IV 에 있다.

[^2]: S. G. Mikhlin, "On the multipliers of Fourier integrals", Doklady Akademii Nauk SSSR **109** (1956), 701–703. Hörmander 가 가정을 약하게 한 판은 L. Hörmander, "Estimates for translation invariant operators in $L^p$ spaces", Acta Mathematica **104** (1960), 93–140 이다.

# 연관 문서

## 선수지식

- [Calderón–Zygmund 이론](calderon-zygmund-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #functional_analysis #measure_theory
