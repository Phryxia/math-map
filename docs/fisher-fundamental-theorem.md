# Fisher 자연선택 기본 정리

# 개요

**Fisher 자연선택 기본 정리(Fisher's fundamental theorem of natural selection)** 는 선택만으로 바뀌는 집단에서 평균 적합도가 늘어나는 속도가 적합도의 분산과 같다는 정리다. 자손을 하루에 $1$, $2$, $3$ 배로 늘리는 세 유형이 같은 비율로 섞인 세균 배양이 있다. 시간이 지나면 빨리 느는 유형이 많아져 배양 전체의 평균 증가율이 오르는데, 그 오르는 속도가 얼마인지가 여기서의 물음이다.

유형 비율의 변화를 적합도와 평균의 차로 적으면, 평균 적합도의 미분이 적합도의 분산과 같아진다.

# 직관

세 유형의 비율을 $x_1,x_2,x_3$, 적합도를 $w_1=1$, $w_2=2$, $w_3=3$ 이라 하자. 유형 $i$ 의 개체 수가 $\dot N_i=w_iN_i$ 로 늘면 비율은 $\dot x_i=x_i(w_i-\bar w)$ 로 바뀐다. $\bar w=\sum_ix_iw_i$ 는 평균 적합도다.

평균 적합도를 미분하면 $\dot{\bar w}=\sum_iw_i\dot x_i=\sum_ix_iw_i(w_i-\bar w)$ 이다. $\sum_ix_i(w_i-\bar w)=0$ 이므로 이것을 $\bar w$ 배 빼도 값이 같고, 다음이 나온다.

$$
\dot{\bar w}=\sum_ix_i(w_i-\bar w)^2
$$

처음에 $x_i=1/3$ 이면 $\bar w=2$ 이고 분산은 $\frac13(1+0+1)=2/3$ 이다. 평균 증가율은 하루에 $2/3$ 의 속도로 오른다.

# 정의

## 적합도와 평균 적합도

유형 $i$ 의 **적합도(fitness)** $w_i$ 는 그 유형의 개체 수가 단위 시간에 늘어나는 비율이다. 비율이 $x$ 인 집단의 **평균 적합도(mean fitness)** 는 $\bar w=\sum_ix_iw_i$ 이고, **적합도의 분산(variance in fitness)** 은 $\sum_ix_i(w_i-\bar w)^2$ 이다. 직관 절의 배양에서 평균은 $2$, 분산은 $2/3$ 이다.

## 이배체 한 자리 모형

유전자 자리 하나에 대립유전자 $1,\dots,n$ 이 있고, 대립유전자 $i$ 와 $j$ 를 하나씩 가진 개체의 적합도가 $w_{ij}=w_{ji}$ 라 하자. 대립유전자 빈도가 $x$ 이고 짝짓기가 무작위이면 대립유전자 $i$ 의 평균 적합도는 $(Wx)\_i$, 집단 평균은 $\bar w=x^{\mathsf T}Wx$ 이다. 빈도는 [복제자 방정식](replicator-equation.md) $\dot x_i=x_i\big((Wx)\_i-\bar w\big)$ 를 따른다[^1].

# 성질

## 유형마다 적합도가 정해진 경우

정리. 적합도가 비율에 의존하지 않는 상수 $w_i$ 이면 $\dot{\bar w}$ 는 적합도의 분산과 같다. 그래서 평균 적합도는 줄지 않고, 모든 유형의 적합도가 같을 때만 멈춘다[^2].

증명은 직관 절의 계산이다.

## 이배체의 경우

정리. 이배체 한 자리 모형에서 다음이 성립한다[^1].

$$
\dot{\bar w}=2\sum_ix_i\big((Wx)\_i-\bar w\big)^2
$$

증명의 요지. $W$ 가 대칭이므로 $\dot{\bar w}=2\dot x^{\mathsf T}Wx$ 이고, 복제자 방정식을 넣으면 위 식이 나온다. 오른쪽은 대립유전자의 평균 적합도가 갖는 분산의 두 배이고, 집단유전학에서 적합도의 상가 유전 분산(additive genetic variance)이라 한다.

세대가 이산적인 판본 $x_i'=x_i(Wx)\_i/\bar w$ 에서도 $\bar w$ 는 세대마다 줄지 않는다[^3]. 그래서 $\bar w$ 는 이 방정식의 Lyapunov 함수이고, 빈도는 $\bar w$ 의 극대점 쪽으로 간다.

## 빈도 의존 적합도에서의 실패

적합도가 비율에 따라 바뀌면 평균 적합도가 줄 수 있다. 복제자 방정식 문서의 매와 비둘기 게임에서 매의 비율이 $q$ 이면 평균 이득은 $1-2q^2$ 다. 비둘기만 있는 집단에 매가 들어오면 $q$ 가 $1/2$ 로 가므로 평균 이득은 $1$ 에서 $1/2$ 로 준다. 이득 행렬이 대칭이 아니라서 위의 정리가 적용되지 않는다.

## Price 방정식

한 세대 동안 형질 $z$ 의 평균이 바뀌는 양은 다음과 같다. 이것을 Price 방정식(Price equation)이라 한다[^4].

$$
\bar w\thinspace\Delta\bar z=\mathrm{Cov}(w,z)+\mathbb E\lbrack w\thinspace\Delta z\rbrack
$$

첫째 항은 선택에 의한 변화이고, 둘째 항은 부모와 자손 사이에서 형질이 바뀌는 몫이다. $z=w$ 로 두고 둘째 항을 무시하면 $\bar w\thinspace\Delta\bar w=\mathrm{Var}(w)$ 가 되어 Fisher 의 정리가 나온다.

# 활용

- 육종의 반응. 한 세대의 선택으로 평균 형질이 바뀌는 양을 상가 유전 분산과 선택의 세기로 예측하는 육종가 방정식(breeder's equation)이 같은 계산에서 나온다.
- 여러 국소 극대. 이배체 한 자리 모형에서 $\bar w$ 가 Lyapunov 함수이므로 빈도는 $\bar w$ 의 국소 극대로 간다. 여러 극대가 있으면 처음 빈도에 따라 도착하는 극대가 다르다.

[^1]: Josef Hofbauer, Karl Sigmund, *Evolutionary Games and Population Dynamics*, Cambridge University Press, 1998.
[^2]: R. A. Fisher, *The Genetical Theory of Natural Selection*, Clarendon Press, 1930, Ch. 2.
[^3]: J. F. C. Kingman, "A mathematical problem in population genetics", *Proceedings of the Cambridge Philosophical Society* 57 (1961), 574–582.
[^4]: George R. Price, "Selection and covariance", *Nature* 227 (1970), 520–521.

# 연관 문서

## 선수지식

- [복제자 방정식](replicator-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #probability #statistics
