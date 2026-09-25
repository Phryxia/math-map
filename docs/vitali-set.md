# Vitali 집합

# 개요

Vitali 집합은 실수를 유리수만큼의 평행이동으로 갈라 얻은 묶음마다 대표를 하나씩 고른 집합이다. 묶음을 고르는 데 [선택공리](axiom-of-choice.md)를 쓴다. 이 집합은 Lebesgue 가측이 아니고, 그 결과로 모든 부분집합에 값을 주면서 평행이동에 불변이고 가산가법인 [측도](measure.md)가 직선 위에 없다. Lebesgue 측도의 정의가 가측집합의 시그마 대수로 범위를 좁히는 것이 이 때문이다.

# 직관

$[0,1)$ 에서 차가 유리수인 두 수를 같은 묶음에 넣는다. $0$ 과 $1/2$ 과 $3/7$ 은 한 묶음이고, $\sqrt2/2$ 는 거기에 유리수를 더해 나오는 수들과 한 묶음이다.

한 묶음은 그 안의 수 하나에 유리수를 더해 얻는 것 전부다. 묶음마다 원소가 셀 수 있게 많고, 한 묶음을 유리수만큼 옮기면 그 묶음 자신으로 돌아온다. 묶음은 셀 수 없이 많다.

묶음마다 수를 하나씩 골라 모은 집합을 $V$ 라 한다. $[0,1)$ 의 유리수 $q$ 마다 $V$ 를 $q$ 만큼 옮기고 $1$ 을 넘는 부분은 $1$ 을 빼서 되돌린다. 옮긴 것 둘이 한 점을 공유하면 그 점에서 나온 대표 둘의 차가 유리수이므로 같은 묶음의 대표이고, 묶음마다 대표가 하나이므로 두 옮김이 같은 것이다. 그러므로 옮긴 것들은 서로 겹치지 않는다.

$x\in[0,1)$ 이 속한 묶음의 대표를 $v$ 라 하면 $x-v$ 는 유리수이고 $x$ 는 그만큼 옮긴 조각에 들어 있다. 옮긴 것들이 $[0,1)$ 을 덮는다.

$[0,1)$ 이 서로 포개지는 조각 셀 수 있게 많은 것으로 겹침 없이 쪼개졌다.

# 정의

## 구성

$[0,1)$ 에서 $x\sim y$ 를 $x-y\in\mathbb Q$ 로 정의하면 [동치관계](equivalence-relations.md)다. 각 동치류에서 원소를 하나씩 고른 집합 $V\subseteq[0,1)$ 을 **Vitali 집합**이라 한다. 동치류가 셀 수 없이 많으므로 이 선택에 선택공리를 쓴다.

## 유리수 평행이동

$q\in\mathbb Q\cap[0,1)$ 에 대해 $1$ 을 법으로 한 평행이동을 다음으로 쓴다.

$$V\oplus q=\lbrace v+q\bmod 1\mid v\in V\rbrace$$

Lebesgue 측도 $\lambda$ 는 평행이동에 불변이고, $[0,1)$ 안에서 잘라 옮기는 이 연산에 대해서도 불변이다.

# 성질

## 비가측성

**정리 (Vitali).** $V$ 는 Lebesgue 가측이 아니다.[^1]

증명은 세 단계다.

1. $q\ne q'$ 이면 $(V\oplus q)\cap(V\oplus q')=\varnothing$ 이다. 공통 원소가 있으면 대표 $v,v'$ 의 차가 유리수이므로 $v=v'$ 이고 $q=q'$ 이 된다.
2. $\bigsqcup_{q\in\mathbb Q\cap[0,1)}(V\oplus q)=[0,1)$ 이다. $x$ 가 속한 동치류의 대표를 $v$ 라 하면 $x-v\bmod 1$ 이 그 $q$ 다.
3. $V$ 가 가측이라 하고 $c=\lambda(V)$ 라 하자. 평행이동 불변성으로 $\lambda(V\oplus q)=c$ 이고, 가산가법성으로 다음이 성립한다.

$$1=\lambda\bigl(\lbrack 0,1)\bigr)=\sum_{q\in\mathbb Q\cap\lbrack 0,1)}c$$

$c=0$ 이면 오른쪽이 $0$ 이고 $c\gt 0$ 이면 발산한다. 어느 쪽도 $1$ 이 아니므로 $V$ 는 가측이 아니다.

## 측도의 확장 불가

**따름정리.** $\mathbb R$ 의 모든 부분집합에 값을 주면서 평행이동에 불변이고 가산가법이며 구간의 값이 그 길이인 측도는 없다.

위 증명이 $\lambda$ 의 성질 가운데 이 넷만 썼다. 그러므로 Lebesgue 측도를 멱집합 전체로 넓히려는 시도는 이 넷 가운데 하나를 버려야 한다. Lebesgue 측도는 정의역을 가측집합으로 좁히는 쪽을 택한다.

## 선택공리의 세기

**정리 (Solovay).** 도달불가능 기수가 존재하는 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel 집합론에 선택공리를 더한 것)의 모형에서, ZF(Zermelo–Fraenkel 집합론)에 의존 선택을 더한 체계의 모형으로 $\mathbb R$ 의 모든 부분집합이 Lebesgue 가측인 것이 있다.[^2]

이 모형에서는 Vitali 집합이 만들어지지 않는다. 비가측 집합의 존재는 의존 선택보다 강한 선택 원리를 요구한다.

# 활용

- [측도](measure.md)가 정의역을 시그마 대수로 잡는 이유를 준다. 가측집합이라는 제한이 기술적 편의가 아니라 위 따름정리의 귀결이다.
- [Banach–Tarski 분해](banach-tarski.md)와 대비된다. Vitali 집합은 가산가법성과 충돌하고, 3 차원의 분해는 유한가법성만으로도 충돌한다. 직선과 평면에서는 모든 부분집합에 값을 주는 유한가법 불변 측도가 있다.
- [선택공리](axiom-of-choice.md)의 사용 등급을 나누는 예다. Solovay 의 정리가 이 구성에 필요한 선택의 세기를 아래에서 막는다.

[^1]: G. Vitali, *Sul problema della misura dei gruppi di punti di una retta*, Bologna, 1905.

[^2]: R. M. Solovay, *A model of set-theory in which every set of reals is Lebesgue measurable*, Annals of Mathematics 92 (1970), 1–56.

# 연관 문서

## 선수지식

- [측도](measure.md)
- [선택공리](axiom-of-choice.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #set_theory #analysis #foundations
