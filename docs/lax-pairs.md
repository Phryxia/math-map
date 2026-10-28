# Lax 쌍

# 개요

**Lax 쌍(Lax pair)** 은 Hamilton 흐름을 행렬 하나의 닮음 변형으로 적는 두 행렬의 짝이다. 자유도가 $n$ 인 계가 적분가능함을 보이려면 보존량 $n$ 개가 필요한데, 보존량은 운동방정식에 대입해 미분이 $0$ 인지 확인하며 하나씩 찾아야 한다. Lax 쌍은 행렬 하나를 찾아 그 [고윳값](eigenvalues.md)들로 보존량을 한꺼번에 얻는다.

# 직관

시간에 따라 변하는 행렬 $L(t)$ 와 $P(t)$ 가

$$
\dot L=\lbrack P,L\rbrack
$$

을 만족하면 $L(t)$ 의 고윳값이 시간에 변하지 않으므로, 고윳값의 대칭함수가 모두 보존량이다. 보존량을 하나씩 찾는 대신 행렬 하나를 찾는 것이 [적분가능계](integrable-systems.md)를 다루는 주된 방법이다.

보존량을 한꺼번에 얻는 방법이 있다. 운동방정식을 행렬 $L$ 의 변화로 적어 $\dot L=PL-LP$ 꼴로 만들면, $\dot U=PU$ 와 $U(0)=I$ 로 정한 행렬 $U(t)$ 에 대해

$$
L(t)=U(t)L(0)U(t)^{-1}
$$

이 성립한다. 양변을 미분해 확인하면 $\dot L=\dot UL(0)U^{-1}+UL(0)\frac{d}{dt}(U^{-1})=PL-LP$ 다. 닮음 변환은 고윳값을 바꾸지 않으므로 $L(t)$ 의 고윳값 전체가 보존량이다.

고윳값을 직접 쓰지 않고 $\mathrm{tr}(L^k)$ 를 쓰면 계산이 더 짧다. 대각합의 순환성으로

$$
\frac{d}{dt}\mathrm{tr}(L^k)=k\thinspace\mathrm{tr}\lbrack L^{k-1}(PL-LP)\rbrack=0
$$

이고, $k=1,\dots,n$ 의 $\mathrm{tr}(L^k)$ 가 고윳값의 대칭함수를 모두 준다.

그러므로 보존량을 찾는 일이 운동방정식을 $\dot L=\lbrack P,L\rbrack$ 꼴로 적는 일로 바뀐다. 그렇게 적을 수 있는 두 행렬의 짝을 Lax 쌍이라 한다.

# 정의

Lax 쌍은 Hamilton 계의 흐름을 교환자로 적는 두 행렬값 함수의 짝이다. 상태공간 위에서 정의된 행렬값 함수 $L$ 과 $P$ 가 계의 모든 해를 따라

$$
\frac{dL}{dt}=\lbrack P,L\rbrack=PL-LP
$$

를 만족하면 $(L,P)$ 를 **Lax 쌍**, 이 식을 **Lax 방정식**이라 한다. $L$ 을 $t$ 에 따라 옮기는 변형이 고윳값을 보존하므로 이것을 **등스펙트럼 변형**이라 한다.

$L$ 이 유한 행렬이 아니라 미분연산자여도 같은 식을 쓴다.

# 성질

## 보존량

**정리.** $(L,P)$ 가 Lax 쌍이면 $\mathrm{tr}(L^k)$ 가 모든 $k\ge1$ 에서 보존량이다.

$\frac{d}{dt}L^k=\sum\_{j}L^j\lbrack P,L\rbrack L^{k-1-j}$ 이고 각 항의 대각합을 순환시켜 모으면 $\mathrm{tr}(L^{k-1}PL)-\mathrm{tr}(L^{k-1}LP)$ 꼴의 상쇄가 일어난다. ∎

$L$ 이 $n\times n$ 행렬이면 $\mathrm{tr}(L),\dots,\mathrm{tr}(L^n)$ 이 고윳값의 기본 대칭함수를 결정하고, 그 뒤의 $k$ 는 새 보존량을 주지 않는다.

## 대합성

Lax 방정식은 보존량의 독립성과 Poisson 괄호의 소멸을 자동으로 주지 않는다. 적분가능계의 정의에 필요한 대합성 $\lbrace\mathrm{tr}(L^j),\mathrm{tr}(L^k)\rbrace=0$ 은 $L$ 의 Poisson 괄호 구조에 추가 조건이 있을 때 따라오고, 그 조건을 고전 $r$ 행렬로 적는다.[^1]

## Toda 격자

직선 위의 질점 $n$ 개가 이웃과 지수적으로 상호작용하는 계의 운동방정식은

$$
\dot q\_j=p\_j,\qquad \dot p\_j=e^{q\_{j+1}-q\_j}-e^{q\_j-q\_{j-1}}
$$

이다. 삼중대각 행렬 $L$ 의 대각성분을 $b\_j=\tfrac12p\_j$, 비대각성분을 $a\_j=\tfrac12e^{(q\_{j+1}-q\_j)/2}$ 로 두고 $P$ 를 $L$ 의 비대각 부분의 반대칭화로 두면 $(L,P)$ 가 Lax 쌍이다.[^1] 보존량 $\mathrm{tr}(L)$ 은 전체 운동량이고 $\mathrm{tr}(L^2)$ 은 에너지다.

## 미분연산자 Lax 쌍

Korteweg–de Vries 방정식 $u\_t=6uu\_x-u\_{xxx}$ 는

$$
L=-\partial\_x^2+u,\qquad P=-4\partial\_x^3+6u\partial\_x+3u\_x
$$

의 Lax 방정식과 같다.[^2] 따라서 $u$ 가 이 방정식의 해이면 Schrödinger 연산자 $L$ 의 스펙트럼이 시간에 변하지 않는다. 유한 행렬이 아니므로 보존량은 대각합이 아니라 산란 자료에서 읽고, 그 자료의 시간 변화가 선형이 되는 것이 [역산란 변환](inverse-scattering-transform.md)이다.

# 활용

- [적분가능계](integrable-systems.md)의 보존량을 실제로 구성하는 방법이다. Lax 쌍을 찾으면 $\mathrm{tr}(L^k)$ 가 보존량 후보를 주고, 남는 일은 독립성과 대합성의 확인이다.
- [고윳값](eigenvalues.md)의 대칭함수가 특성다항식의 계수라는 사실이 쓰이는 자리다. 등스펙트럼 변형에서 특성다항식 전체가 보존되므로 계수 하나하나가 보존량이다.
- [삼중대각 행렬](tridiagonal-systems.md)의 구조가 Toda 격자의 $L$ 에 그대로 나타난다. 이웃끼리만 상호작용하는 계가 삼중대각 행렬을 주고, 그 고윳값 계산이 격자의 보존량 계산이다.
- 역산란 변환에서 비선형 편미분방정식의 초기값 문제를 산란 자료의 선형 흐름으로 바꾼다. Korteweg–de Vries 방정식의 고립파 해를 이 방법으로 적는다.[^2]

[^1]: Olivier Babelon, Denis Bernard, Michel Talon, *Introduction to Classical Integrable Systems*, Cambridge University Press, 2003, 2 장과 4 장. Lax 방정식, Toda 격자의 Lax 쌍, 고전 $r$ 행렬과 대합성을 다룬다.
[^2]: Peter D. Lax, "Integrals of nonlinear equations of evolution and solitary waves", *Communications on Pure and Applied Mathematics* 21 (1968), 467-490. 미분연산자 Lax 쌍과 Korteweg-de Vries 방정식의 등스펙트럼 성질이 여기 있다.

# 연관 문서

## 선수지식

- [적분가능계](integrable-systems.md)
- [고윳값](eigenvalues.md)

## 더 알아보기

- [역산란 변환](inverse-scattering-transform.md)

#differential_geometry #analysis #linear_algebra
