# Weyl 보조정리

# 개요

**Weyl 보조정리(Weyl's lemma)** 는 Laplace 방정식을 적분으로 바꾼 약한 꼴만 만족하는 국소 적분가능 함수가 거의 어디서나 매끄러운 [조화함수](harmonic-functions.md)와 같다는 정리다. 분포로 쓰면 $\Delta u=0$ 인 [Schwartz 분포](schwartz-distributions.md) $u$ 는 매끄러운 함수다. 에너지 최소화나 약한 해의 방법으로 얻은 해가 실제로 두 번 미분가능한 해라는 것을 이 정리로 보인다.

# 직관

경계값이 주어진 함수 가운데 에너지 $\frac12\int\vert\nabla u\vert^2$ 를 최소로 하는 $u$ 를 찾았다고 하자. 최소점이라는 것에서 나오는 식은 경계에서 $0$ 인 매끄러운 $\varphi$ 에 대해 $\int\nabla u\cdot\nabla\varphi=0$ 이다. $u$ 가 두 번 미분가능하면 부분적분해 $\Delta u=0$ 을 얻지만, 최소점은 기울기가 제곱적분가능하다는 것만 알려진 함수라서 두 번 미분할 수 있는지 모른다.

$u$ 의 미분을 쓰지 않으려고 미분을 $\varphi$ 로 넘긴다. 부분적분을 한 번 더 하면 조건은 $\int u\thinspace\Delta\varphi=0$ 이 되고, 이 식에는 $u$ 의 미분이 없다. 이 조건만으로 $u$ 가 매끄럽다는 것을 보이려면 $u$ 를 작은 공 위에서 평균해 매끄럽게 만든 함수를 본다. 평균한 함수는 매끄럽고 조화함수다. 조화함수는 공 위의 평균이 중심의 값과 같으므로 한 번 더 평균해도 변하지 않는다. 이것을 쓰면 평균의 반지름을 바꿔도 같은 함수가 나오고, 반지름을 $0$ 으로 보내면 $u$ 자신이 그 매끄러운 함수와 같아진다.

# 정의

$\Omega\subseteq\mathbb R^n$ 이 열린 집합이고 $u$ 가 $\Omega$ 에서 국소 적분가능하다. 콤팩트 지지를 갖는 모든 매끄러운 함수 $\varphi\in C\_c^\infty(\Omega)$ 에 대해

$$
\int_\Omega u\thinspace\Delta\varphi\thinspace dx=0
$$

이면 $u$ 를 **약조화함수(weakly harmonic function)** 라 한다.

**정리(Weyl 보조정리).** 약조화함수 $u$ 에 대해, $\Omega$ 에서 조화인 매끄러운 함수 $h$ 가 존재해 거의 모든 점에서 $u=h$ 다.[^1]

# 성질

## 증명의 요지

$\eta$ 를 원점 중심 공 $B(0,1)$ 에 지지를 갖고 회전대칭이며 적분이 $1$ 인 매끄러운 함수라 하고 $\eta\_\varepsilon(x)=\varepsilon^{-n}\eta(x/\varepsilon)$ 로 둔다. $u\_\varepsilon=u\ast\eta\_\varepsilon$ 은 경계에서 $\varepsilon$ 보다 먼 점에서 매끄럽고, $\Delta u\_\varepsilon(x)=\int u(y)\Delta\_x\eta\_\varepsilon(x-y)\thinspace dy=0$ 이므로 조화다. 조화함수의 평균값 성질과 $\eta\_\delta$ 의 회전대칭으로 $u\_\varepsilon\ast\eta\_\delta=u\_\varepsilon$ 이다. 합성곱의 교환법칙으로

$$
u\_\varepsilon=u\_\varepsilon\ast\eta\_\delta=u\ast\eta\_\varepsilon\ast\eta\_\delta=u\_\delta\ast\eta\_\varepsilon=u\_\delta
$$

이므로 $u\_\varepsilon$ 은 $\varepsilon$ 에 의존하지 않는다. 이 공통의 함수를 $h$ 라 하면 $\varepsilon\to 0$ 에서 $u\_\varepsilon\to u$ 가 $L^1\_{\mathrm{loc}}$ 에서 성립하므로 거의 모든 점에서 $u=h$ 다.

## 분포로 쓴 꼴

$u$ 가 $\Omega$ 위의 분포이고 분포의 의미에서 $\Delta u=0$ 이면 $u$ 는 매끄러운 조화함수다. 국소 적분가능성이 없어도 분포를 완화자와 합성하면 매끄러운 함수가 되므로 같은 증명이 성립한다.

## 저타원성

미분작용소 $P$ 가 **저타원(hypoelliptic)** 이라는 것은, 열린 집합에서 $Pu$ 가 매끄러우면 분포 $u$ 도 그 집합에서 매끄러운 것이다. Weyl 보조정리는 Laplace 작용소가 저타원이라는 것이다. 계수가 매끄러운 모든 타원형 작용소는 저타원이고, [열방정식](heat-equation.md)의 작용소 $\partial\_t-\Delta$ 도 저타원이다. 파동 방정식의 작용소 $\partial\_t^2-\Delta$ 는 저타원이 아니다. 공간이 1 차원이면 $f(x-t)$ 는 $f$ 가 매끄럽지 않아도 파동 방정식의 해다.[^2]

# 활용

- [Dirichlet 원리](dirichlet-principle.md): [Sobolev 공간](sobolev-spaces.md)에서 직접법으로 얻은 에너지 최소점은 약조화함수이고, 이 정리로 매끄러운 조화함수다.
- [타원형 정칙성](elliptic-regularity.md): 계수가 매끄러운 타원형 방정식 $Lu=f$ 의 약한 해는 $f$ 보다 두 단계 매끄럽고, $f=0$ 이면 매끄럽다. $L=\Delta$ 이고 $f=0$ 인 경우가 이 정리다.

[^1]: H. Weyl, *The method of orthogonal projection in potential theory*, Duke Mathematical Journal **7** (1940), 411–444. 증명은 L. C. Evans, *Partial Differential Equations*, 2nd ed., American Mathematical Society, 2010, 2 장 2 절과 부록 C.
[^2]: L. Hörmander, *The Analysis of Linear Partial Differential Operators II*, Springer, 1983, 11 장(저타원 작용소).

# 연관 문서

## 선수지식

- [조화함수](harmonic-functions.md)
- [Schwartz 분포](schwartz-distributions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #analysis
