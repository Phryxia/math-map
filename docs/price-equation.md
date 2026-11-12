# Price 방정식

# 개요

**Price 방정식(Price equation)** 은 한 세대 동안 집단에서 어떤 형질의 평균이 바뀌는 양을, 형질과 자손 수의 공분산과 자손에게 형질이 전해지며 바뀌는 양의 합으로 적은 항등식이다. 개체 네 마리 가운데 둘이 어떤 형질을 갖고, 형질을 가진 개체가 자손을 두 마리씩, 갖지 않은 개체가 한 마리씩 남긴다. 다음 세대에서 그 형질을 가진 개체의 비율이 얼마나 느는지가 이 방정식의 물음이다.

Price 방정식은 그 변화량을 공분산 하나로 적어, 선택이 형질을 어느 쪽으로 미는지를 형질과 자손 수가 함께 변하는 정도로 판정한다.

# 직관

네 개체의 형질을 $z=(0,0,1,1)$, 자손 수를 $w=(1,1,2,2)$ 라 하자. 형질의 평균은 $1/2$ 이다. 자손은 모두 $6$ 마리이고 그 가운데 형질을 가진 부모의 자손이 $4$ 마리이므로, 자손이 부모의 형질을 그대로 받으면 다음 세대의 평균은 $2/3$ 이다. 평균은 $1/6$ 만큼 올랐다.

같은 값을 공분산으로 얻는다. $wz$ 의 값은 $0,0,2,2$ 이므로 그 평균이 $1$ 이고, $w$ 의 평균은 $3/2$ 이므로 $\mathrm{Cov}(w,z)=1-\frac32\cdot\frac12=\frac14$ 다. 이것을 자손 수의 평균 $3/2$ 로 나누면 $1/6$ 이다.

# 정의

## 형질과 자손 수

집단의 개체 $i=1,\dots,n$ 마다 형질 값 $z_i$ 와 자손 수 $w_i$ 가 있고, $z_i'$ 는 개체 $i$ 의 자손들의 형질 평균이다. $\Delta z_i=z_i'-z_i$ 는 전달 과정에서 형질이 바뀐 양이다. 평균 $\mathbb E$ 와 공분산 $\mathrm{Cov}$ 는 개체 $n$ 개에 대한 고른 평균으로 잰다.

다음 세대의 형질 평균은 자손 수로 가중한 평균 $\bar z'=\sum_iw_iz_i'/\sum_iw_i$ 이고, $\Delta\bar z=\bar z'-\bar z$ 다. 직관 절에서 $\Delta z_i=0$ 이고 $\Delta\bar z=1/6$ 이다.

# 성질

## Price 방정식

정리. 다음이 성립한다[^1].

$$
\bar w\thinspace\Delta\bar z=\mathrm{Cov}(w,z)+\mathbb E\lbrack w\thinspace\Delta z\rbrack
$$

증명의 요지. $\bar w\thinspace\bar z'=\mathbb E\lbrack wz'\rbrack=\mathbb E\lbrack wz\rbrack+\mathbb E\lbrack w\Delta z\rbrack$ 이다. 양변에서 $\bar w\thinspace\bar z$ 를 빼면 $\mathbb E\lbrack wz\rbrack-\bar w\bar z=\mathrm{Cov}(w,z)$ 이므로 위 식이 나온다.

첫째 항은 선택에 의한 변화이고, 둘째 항은 돌연변이나 재조합처럼 부모와 자손 사이에서 형질이 바뀌는 몫이다. 형질 $z$ 로 자손 수 $w$ 자체를 두고 둘째 항을 무시하면 $\bar w\thinspace\Delta\bar w=\mathrm{Var}(w)$ 이고, [Fisher 자연선택 기본 정리](fisher-fundamental-theorem.md)의 이산 판본이다.

## 집단이 여럿인 경우

개체가 집단 $k$ 로 나뉘어 있고 집단의 자손 수 평균과 형질 평균을 $W_k$, $Z_k$ 라 하자. 집단을 개체로 보고 Price 방정식을 쓴 뒤, 둘째 항의 집단 안 변화에 다시 Price 방정식을 쓰면 전달 과정에서 형질이 바뀌지 않을 때 다음이 나온다[^2].

$$
\bar w\thinspace\Delta\bar z=\mathrm{Cov}\_k(W_k,Z_k)+\mathbb E_k\lbrack\mathrm{Cov}\_{i\in k}(w_i,z_i)\rbrack
$$

첫째 항은 집단 사이의 선택, 둘째 항은 집단 안의 선택이다. 형질이 집단 안에서는 손해이고 집단 사이에서는 이득이면 두 항의 부호가 갈린다.

## Hamilton 규칙

개체가 자기 형질 $z_i\in\lbrace 0,1\rbrace$ 이면 자기 자손을 $c$ 만큼 잃고, 상대의 형질에 따라 자손을 $b$ 배 얻는다고 하자. 상대의 형질을 $z_i^{\mathrm p}$ 라 하면 $w_i=1-cz_i+bz_i^{\mathrm p}$ 다. 관계도(relatedness)를 $r=\mathrm{Cov}(z^{\mathrm p},z)/\mathrm{Var}(z)$ 로 두면 다음이 나온다.

$$
\mathrm{Cov}(w,z)=\mathrm{Var}(z)\thinspace(rb-c)
$$

전달 과정에서 형질이 바뀌지 않으면 이 형질은 $rb\gt c$ 일 때 늘어난다. 이것을 Hamilton 규칙(Hamilton's rule)이라 한다[^3].

# 활용

- 형질 진화의 방향. 형질과 자손 수의 공분산의 부호로, 그 형질이 다음 세대에 늘어날지 줄어들지를 판정한다.
- 이타 행동. Hamilton 규칙으로 혈연 사이의 도움 행동이 퍼지는 조건을 형제 사이의 $r=1/2$ 같은 값으로 계산한다.
- 다수준 선택. 집단 사이와 집단 안의 공분산을 따로 재어 어느 수준의 선택이 우세한지 비교한다.

[^1]: George R. Price, "Selection and covariance", *Nature* 227 (1970), 520–521.
[^2]: George R. Price, "Extension of covariance selection mathematics", *Annals of Human Genetics* 35 (1972), 485–490.
[^3]: W. D. Hamilton, "The genetical evolution of social behaviour. I", *Journal of Theoretical Biology* 7 (1964), 1–16.

# 연관 문서

## 선수지식

- [Fisher 자연선택 기본 정리](fisher-fundamental-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #probability #statistics
