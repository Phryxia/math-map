# Gärtner–Ellis 정리

# 개요

Gärtner–Ellis 정리는 독립 가정 없이 [대편차 원리](large-deviations.md)를 주는 정리다. 확률벡터열 $Z_n$ 의 스케일된 로그 적률생성함수가 극한 $\Lambda$ 를 갖고 $\Lambda$ 가 미분가능하면, $Z_n/n$ 이 rate function $\Lambda^\ast$ 로 대편차 원리를 만족한다.

Cramér 정리가 독립이고 같은 분포를 따르는 열에만 적용되는 것을 상관이 있는 열로 넓힌다. Markov 연쇄의 시간평균이 주된 적용 대상이다.

# 직관

Cramér 정리의 상계는 Markov 부등식에서 나온다. $\Lambda_n(\lambda)=\log\mathbb E\lbrack e^{\lambda S_n}\rbrack$ 으로 쓰면 임의의 $\lambda\gt 0$ 에서

$$
\mathbb P\lbrack S_n/n\ge x\rbrack\le e^{-n\lambda x}\mathbb E\lbrack e^{\lambda S_n}\rbrack=\exp\Bigl(-n\bigl(\lambda x-\tfrac1n\Lambda_n(n\lambda)\bigr)\Bigr)
$$

이다. 독립이 쓰인 자리는 $\Lambda_n(n\lambda)=n\Lambda_1(\lambda)$ 한 곳이고, 이 등식은 $e^{\lambda S_n}$ 의 기댓값을 항별 기댓값의 곱으로 가르는 데서 나온다. 상관이 있으면 등식이 깨지지만, 극한

$$
\Lambda(\lambda)=\lim_{n\to\infty}\tfrac1n\Lambda_n(n\lambda)
$$

가 존재하기만 하면 위 부등식의 지수가 $-n(\lambda x-\Lambda(\lambda))$ 에 수렴하므로 $\lambda$ 에 대해 최적화한 상계 $e^{-n\Lambda^\ast(x)}$ 가 그대로 남는다.

하계는 사정이 다르다. Cramér 정리의 하계는 원래 분포를 $e^{\lambda S_n}$ 으로 기울여 평균이 $x$ 인 분포를 만드는 데서 나오고, 그 $\lambda$ 는 $\Lambda'(\lambda)=x$ 의 해다. $\Lambda$ 가 $\lambda$ 에서 미분가능하지 않으면 이 방정식의 해가 없어 기울일 분포를 고를 수 없다. 그래서 극한의 존재만으로는 부족하고 $\Lambda$ 의 미분가능성을 함께 가정한다.

# 정의

## 스케일된 로그 적률생성함수

$Z_n$ 을 $\mathbb R^d$ 값 확률벡터열이라 하고

$$
\Lambda_n(\lambda)=\log\mathbb E\lbrack e^{\langle\lambda,Z_n\rangle}\rbrack,\qquad \Lambda(\lambda)=\lim_{n\to\infty}\tfrac1n\Lambda_n(n\lambda)
$$

로 둔다. 극한은 $\lbrack-\infty,\infty\rbrack$ 에서 존재하는 것으로 가정한다. $\mathcal D=\lbrace\lambda:\Lambda(\lambda)\lt\infty\rbrace$ 를 $\Lambda$ 의 유효정의역이라 한다.

## 본질적 매끄러움

$\Lambda$ 가 다음 셋을 만족하면 **본질적으로 매끄럽다**고 한다.

- $\mathcal D$ 의 내부 $\mathcal D^\circ$ 가 비어 있지 않다.
- $\Lambda$ 가 $\mathcal D^\circ$ 에서 미분가능하다.
- $\mathcal D^\circ$ 안에서 경계로 가는 임의의 열 $\lambda_k$ 에 대해 $\vert\nabla\Lambda(\lambda_k)\vert\to\infty$ 다.

셋째 조건을 가파름이라 한다. $\mathcal D=\mathbb R^d$ 이면 경계가 없어 자동으로 성립한다.

# 성질

## Gärtner–Ellis 정리

**정리.** 모든 $\lambda\in\mathbb R^d$ 에서 극한 $\Lambda(\lambda)$ 가 존재하고, $0\in\mathcal D^\circ$ 이며 $\Lambda$ 가 본질적으로 매끄러운 하반연속 볼록함수이면, $Z_n/n$ 의 분포는 속도 $n$ 과 rate function

$$
\Lambda^\ast(x)=\sup_{\lambda\in\mathbb R^d}\bigl(\langle\lambda,x\rangle-\Lambda(\lambda)\bigr)
$$

로 대편차 원리를 만족한다.[^1]

증명의 요지. 상계는 위의 Markov 부등식 계산을 콤팩트 집합에서 유한 개의 반공간으로 덮어 얻고, $0\in\mathcal D^\circ$ 가 지수적 긴장성을 주어 콤팩트 밖을 버린다. 이 단계에는 미분가능성이 필요하지 않다. 하계는 $\Lambda^\ast$ 의 노출점에서 세운다. $x$ 가 기울기 $\lambda$ 의 노출점이면 측도를 $e^{\langle\lambda,Z_n\rangle}$ 으로 기울인 분포 아래에서 $Z_n/n$ 이 $x$ 로 수렴하고, 우도비가 $e^{-n\Lambda^\ast(x)}$ 를 내놓는다. 본질적 매끄러움이 $\mathcal D^\circ$ 의 기울기로 노출되는 점들만으로 하계의 하한을 전부 채우게 한다. $\square$

## 독립 경우

$Z_n=S_n=X_1+\dots+X_n$ 이고 $X_i$ 가 독립이고 같은 분포를 따르면 $\Lambda_n(n\lambda)=n\Lambda_1(\lambda)$ 이므로 $\Lambda=\Lambda_1$ 이다. $\Lambda_1$ 이 모든 $\lambda$ 에서 유한하면 가파름 조건이 공백이고 정리가 Cramér 정리를 준다.

## 미분불가능한 극한의 반례

$Z_n/n$ 이 확률 $1/2$ 로 $A$ 를, 확률 $1/2$ 로 $-A$ 를 값으로 갖는 열을 놓는다($A\gt 0$). 그러면

$$
\tfrac1n\Lambda_n(n\lambda)=\tfrac1n\log\bigl(\tfrac12e^{n\lambda A}+\tfrac12e^{-n\lambda A}\bigr)\to A\vert\lambda\vert
$$

이므로 $\Lambda(\lambda)=A\vert\lambda\vert$ 이고 $\lambda=0$ 에서 미분가능하지 않다. 이때 $\Lambda^\ast(x)$ 는 $\vert x\vert\le A$ 에서 $0$ 이고 그 밖에서 $\infty$ 다. 원점의 작은 열린 근방 $G$ 를 잡으면 $\mu_n(G)=0$ 이므로 왼쪽 하계는 $-\infty$ 인데 오른쪽은 $-\inf_{x\in G}\Lambda^\ast(x)=0$ 이다. 하계가 깨진다.

상계는 이 예에서도 성립한다. 두 부등식 가운데 미분가능성을 요구하는 쪽이 하계다.

## Markov 연쇄의 덧셈 함수

유한 상태공간에서 기약이고 비주기적인 전이행렬 $P$ 와 함수 $f$ 를 놓고 $S_n=\sum_{i=1}^nf(X_i)$ 라 하자. 기울인 행렬을 $P_\lambda(x,y)=P(x,y)e^{\lambda f(y)}$ 로 두면

$$
\Lambda(\lambda)=\log\rho(P_\lambda)
$$

이고 $\rho$ 는 Perron 고윳값이다.[^2] Perron–Frobenius 정리가 $\rho(P_\lambda)$ 를 단순 고윳값으로 주므로 $\rho$ 가 $\lambda$ 에 해석적으로 의존하고 $\Lambda$ 가 $\mathbb R$ 전체에서 매끄럽다. 정리의 가정이 모두 성립하므로 $S_n/n$ 이 $\Lambda^\ast$ 로 대편차 원리를 만족한다.

# 활용

- **Markov 연쇄의 시간평균.** 위 계산이 기약 유한 연쇄의 시간평균에 대편차 원리를 준다. 상태공간이 일반적인 경우의 rate function 은 경험측도에 대한 Donsker–Varadhan 범함수로 쓴다.
- **통계역학의 자유에너지.** $\Lambda$ 가 단위 부피당 자유에너지, $\Lambda^\ast$ 가 엔트로피에 대응한다. $\Lambda$ 가 꺾이는 자리가 상전이이고, 그 자리에서 정리의 가정이 깨지는 것과 두 상의 공존이 대응한다.
- **상관이 있는 열의 꼬리 추정.** 적률생성함수의 극한만 계산하면 되므로, 스펙트럼 방법으로 $\Lambda$ 를 얻는 모형에서 [집중부등식](concentration-inequalities.md)보다 정확한 지수를 준다.
- **가중 표본의 분산 추정.** 중요도 표본추출에서 기울인 분포를 고르는 기준이 $\Lambda'(\lambda)=x$ 이고, 이 방정식의 해가 정리의 하계가 쓰는 기울기와 같다.

[^1]: Amir Dembo, Ofer Zeitouni, *Large Deviations Techniques and Applications*, 2판, Springer, 1998, 2.3 절. 원 논문은 Jürgen Gärtner, "On large deviations from the invariant measure", *Theory of Probability and Its Applications* 22 (1977), 24–39 와 Richard S. Ellis, "Large deviations for a general class of random vectors", *Annals of Probability* 12 (1984), 1–12 이다.
[^2]: Dembo, Zeitouni, 위 책 3.1 절.

# 연관 문서

## 선수지식

- [대편차 원리](large-deviations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #information_theory #analysis
