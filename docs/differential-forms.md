# 미분형식과 Stokes 정리

# 개요

미적분학의 기본정리, Green 정리, 발산 정리, 곡면에 대한 Stokes 정리는 모양이 비슷하면서 차원과 기호가 다르다. 미분형식은 이 넷을 한 정리로 묶는다.

$$
\int_M d\omega=\int_{\partial M}\omega
$$

$d$ 는 미분이고 $\partial$ 는 경계이며, 정리는 둘이 서로 수반이라고 말한다. 차원이 얼마든 형태가 같다.

통일의 근거는 적분되는 대상을 다시 정의한 데 있다. 적분되는 것은 함수가 아니라 형식이고, 형식은 [다양체](manifolds.md)의 각 점에서 접벡터 여러 개를 받아 부호 있는 부피를 내놓는 교대 다중선형 함수다. 이 구조는 [텐서곱](tensor-products.md)의 교대 부분으로 서술되며 좌표변환의 Jacobi 행렬식이 따라 나온다.

# 직관

## 적분의 단위

$\int f\thinspace dx$ 에서 좌표를 바꾸면 $dx$ 가 $|\partial x/\partial u|\thinspace du$ 로 바뀌며 Jacobi 행렬식이 붙는다. $f$ 혼자서는 적분될 수 없고 $f\thinspace dx$ 전체가 적분의 단위다.

$k$ 형식은 각 점에서 $k$ 개의 접벡터가 만드는 평행다면체에 부호 있는 부피를 배정하는 규칙이며, 좌표변환에서 Jacobi 행렬식이 정의상 따라 나와 좌표에 무관한 적분이 가능해진다.

## 교대성과 방향

두 벡터를 바꿔 넣으면 부호가 바뀐다는 교대성에서 방향이 나온다.

$$
dx\wedge dy=-\thinspace dy\wedge dx,\qquad dx\wedge dx=0
$$

같은 방향이 두 번 들어가면 평행다면체가 납작해져 부피가 0 이라는 기하가 대수 규칙이 된 것이다. 행렬식을 교대 다중선형 함수로 특징짓는 것과 같은 내용이고, 좌표변환 공식이 여기서 따라온다.

## $d\circ d=0$

외미분을 두 번 적용하면 항상 0 이다. 혼합 편미분이 순서에 무관하다는 사실과 쐐기곱의 반대칭성이 만나 상쇄된다.

기하적으로는 경계의 경계가 없다는 진술이다. 정육면체의 경계는 여섯 면이고 그 여섯 면의 경계인 변들은 두 번씩 반대 방향으로 나타나 상쇄된다. Stokes 정리가 $d$ 와 $\partial$ 의 수반이므로 두 사실이 같다.

# 정의

## 교대 형식

벡터공간 $V$ 에 대해 $\Lambda^kV^\ast$ 는 $k$ 개의 인수를 받는 교대 다중선형 함수들의 공간이다. $\dim V=n$ 이면

$$
\dim\Lambda^kV^\ast=\binom nk
$$

이다. $k\gt n$ 이면 0 이고, $k=n$ 이면 1 차원이라 행렬식이 유일한 후보다.

## 미분형식

다양체 $M$ 위의 $k$ **형식**은 각 점 $p$ 에서 $\Lambda^kT_p^\ast M$ 의 원소를 매끄럽게 배정한 것이며 국소 좌표에서 다음 꼴이다.

$$
\omega=\sum_{i_1\lt\cdots\lt i_k}f_{i_1\cdots i_k}\thinspace dx^{i_1}\wedge\cdots\wedge dx^{i_k}
$$

0-형식은 함수이고 $n$ 차원 다양체 위의 $n$ 형식은 부피 요소다.

## 쐐기곱

$$
\alpha\wedge\beta=(-1)^{kl}\thinspace\beta\wedge\alpha\qquad(\alpha\in\Omega^k,\ \beta\in\Omega^l)
$$

결합적이고 쌍선형이며 $\Omega^\bullet(M)$ 을 등급 대수로 만든다.

## 외미분

다음 네 성질로 유일하게 결정되는 작용소 $d:\Omega^k\to\Omega^{k+1}$ 이다.

1. 선형이다.
2. 함수 $f$ 에 대해 $df$ 는 보통의 미분이다.
3. 곱규칙 $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta$ 가 성립한다.
4. $d\circ d=0$ 이다.

좌표에서는 계수함수에 $d$ 를 적용하고 쐐기를 붙여 계산한다.

$$
d\big(f\thinspace dx^{i_1}\wedge\cdots\wedge dx^{i_k}\big)=df\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_k}
$$

## 당김

매끄러운 사상 $F:N\to M$ 은 형식을 반대 방향으로 옮긴다.

$$
(F^\ast\omega)\_p(v_1,\dots,v_k)=\omega_{F(p)}\big(dF_p v_1,\dots,dF_p v_k\big)
$$

당김은 쐐기곱, 외미분과 교환한다. $F^\ast(d\omega)=d(F^\ast\omega)$ 가 좌표변환의 근거이고 치환적분 공식이 그 한 경우다.

# 성질

## Stokes 정리

$M$ 이 방향을 가진 $n$ 차원 다양체이고 $\omega$ 가 받침이 콤팩트한 $(n-1)$ 형식이면

$$
\int_Md\omega=\int_{\partial M}\omega
$$

이다.

*증명.* 단위 분할로 문제를 좌표 조각 하나로 국소화하고 반공간 $\lbrace x^n\ge0\rbrace$ 에서 직접 계산한다. 그 계산이 미적분학의 기본정리 한 번이다.

| 차원 | 고전적 이름 |
|---|---|
| $n=1$ | 미적분학의 기본정리 |
| $n=2$ 인 평면 | Green 정리 |
| $n=2$ 이고 바탕이 $\mathbb R^3$ 안의 곡면 | 곡면 Stokes 정리 |
| $n=3$ | 발산 정리 |

$\mathbb R^3$ 의 grad, curl, div 는 각각 $\Omega^0\to\Omega^1$ , $\Omega^1\to\Omega^2$ , $\Omega^2\to\Omega^3$ 의 $d$ 이고, $\mathrm{curl}\circ\mathrm{grad}=0$ 과 $\mathrm{div}\circ\mathrm{curl}=0$ 이 $d\circ d=0$ 의 사례다. 세 연산이 3 차원에서만 이렇게 정리되는 것은 $\binom3k$ 가 $1,3,3,1$ 이라 1-형식과 2-형식을 모두 벡터장으로 볼 수 있기 때문이다.

## 코호몰로지와 구멍

$d\circ d=0$ 이므로 완전형식은 닫힘형식이고, 역의 성립 여부가 공간의 모양에 달렸다.

$$
H^k_{\mathrm{dR}}(M)=\frac{\ker\big(d:\Omega^k\to\Omega^{k+1}\big)}{\mathrm{im}\big(d:\Omega^{k-1}\to\Omega^k\big)}
$$

Poincaré 보조정리는 수축가능한 열린집합에서 모든 닫힘형식이 완전하다고 말한다. $H^k\ne0$ 은 국소적으로는 메울 수 있고 전역적으로는 메울 수 없는 형식이 있다는 뜻이다.

$\mathbb R^2\setminus\lbrace 0\rbrace$ 위의 각형식

$$
\omega=\frac{-y\thinspace dx+x\thinspace dy}{x^2+y^2}
$$

은 $d\omega=0$ 이지만 단위원에서의 적분이 $2\pi$ 이므로 완전하지 않다. 원점의 구멍이 $H^1$ 을 1 차원으로 만든다.

de Rham 정리는 이 코호몰로지가 위상적 특이 코호몰로지와 동형이라고 말한다. 미분으로 정의한 대상이 위상 불변량이 된다.

## 방향과 부피

$n$ 형식이 각 점에서 1 차원이므로 어디서도 0 이 되지 않는 $n$ 형식의 존재와 방향을 줄 수 있는 것이 동치다. 뫼비우스 띠에는 그런 형식이 없다.

[Riemann 계량](riemannian-metrics.md)이 있으면 정규직교 틀에서 $1$ 을 주는 부피형식이 유일하게 결정되고 길이, 넓이, 부피가 형식의 적분으로 통일된다. Hodge 별작용소가 $k$ 형식과 $(n-k)$ 형식을 맞바꾸며 $\delta=\pm\negthinspace\star d\star$ 와 $\Delta=d\delta+\delta d$ 로 Laplace 작용소가 나온다. Hodge 정리는 조화형식이 코호몰로지류의 대표원임을 말한다.

## 좌표 없는 계산

곱규칙과 $d\circ d=0$ 만으로 상당한 계산이 끝나고, 좌표 선택이 필요 없으므로 다양체 위에서 그대로 성립한다. $\mathbb R^3$ 에서 $\omega=x\thinspace dy\wedge dz+y\thinspace dz\wedge dx+z\thinspace dx\wedge dy$ 를 미분하면

$$
d\omega=(1+1+1)\thinspace dx\wedge dy\wedge dz=3\thinspace dx\wedge dy\wedge dz
$$

이고 단위구에서 Stokes 정리를 적용하면 $\int_{S^2}\omega=3\cdot\frac43\pi=4\pi$ 다.

# 활용

- Maxwell 방정식 넷이 전자기장 2-형식 $F$ 와 전류 3-형식 $J$ 에 대한 $dF=0$ , $d\star F=J$ 로 줄어든다. 첫 식이 Gauss 자기 법칙과 Faraday 법칙, 둘째가 Gauss 법칙과 Ampère–Maxwell 법칙이다. 좌표계에 의존하지 않으므로 곡률이 있는 시공간으로 옮겨도 형태가 같다. $dF=0$ 에서 Poincaré 보조정리로 국소적으로 $F=dA$ 인 퍼텐셜이 존재하고, $A$ 의 게이지 자유도가 $H^1$ 과 연결되어 Aharonov–Bohm 효과로 나타난다.
- $\omega$ 가 닫혀 있으면 그 적분이 경로의 연속변형에 불변이다. 보존장과 보존량이 이 진술의 변형이고, 닫혀 있지만 완전하지 않은 형식의 적분이 감은 수, 유수, 지표 같은 정수 불변량을 준다.
- Gauss–Bonnet 정리는 곡률의 적분이 Euler 지표와 같다는 진술이며 형식의 언어로 쓰인다. 지표 정리들은 해석적 불변량과 위상적 불변량의 일치를 말하고 de Rham 의 다리가 그 원형이다.
- Hamilton 역학의 무대는 닫힌 비퇴화 2-형식을 가진 다양체다. Hamilton 흐름이 이 형식을 보존하므로 Liouville 정리가 그 거듭제곱인 부피형식의 보존으로 따라오고, 정준변환은 형식을 보존하는 사상으로 정의된다.

# 연관 문서

## 선수지식

- [다양체](manifolds.md)
- [외대수](exterior-algebra.md)

## 더 알아보기

- [de Rham 코호몰로지](de-rham-cohomology.md)

#differential_geometry #analysis #topology
